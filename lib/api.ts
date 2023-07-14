// Fetcher is our main API handler
import { NewUser, User } from "./types"
import { Product } from "@prisma/client"
import { FC } from "react"

type ItemInfo = {
    product: Product
    quantity: number
}

type FetchData = {
    url: string
    method: string
    body?: User | NewUser | ItemInfo | {}
    json?: boolean
}
export const fetcher: FC<FetchData> = async ({ url, method, body, json = true }) => {
    const res = await fetch(url, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })

    if(!res.ok){
        throw new Error("API error");
    }

    if (json) {
        const data = await res.json();
        return data.data;
    }
}

export const register = (user: NewUser) => {
    return fetcher({url: '/api/register', method: 'post', body: user})
}

export const signin = (user: User) => {
    return fetcher({url: '/api/signin', method: 'post', body: user})
}

export const addItemToCart = (data: ItemInfo) => {
    return fetcher({url: '/api/updateCart', method: 'post', body: data})
}

// export const getItemFromCart = (id: string) => {
//     return fetcher({url: '/api/getItemFromCart', method: 'post', body: id})
// }

export const authUser = () => {
    return fetcher({url: '/api/authUser', method: 'get'})
}

