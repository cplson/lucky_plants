// Fetcher is our main API handler
import { NewUser, User } from "./types"
import { Product } from "@prisma/client"
import { Session } from "next-auth"
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
        },
    })

    if(!res.ok){
        throw new Error("API error");
    }

    if (json) {  
        return res.json();
    }
}

export const register = (user: NewUser) => {
    return fetcher({url: '/api/register', method: 'post', body: user})
}

export const signin = (user: User) => {
    return fetcher({url: '/api/signin', method: 'post', body: user})
}

export const updateCart = (data: ItemInfo) => {
    return fetcher({url: '/api/updateCart', method: 'post', body: data})
}

export const getItemFromCart = (userId: string, productId: string) => {
    return fetcher({url: `https://lucky-plants-cplson.vercel.app/api/getItemsFromCart?userId=${userId}&productId=${productId}`, method: 'GET'})
}

export const authUser = () => {
    return fetcher({url: '/api/authUser', method: 'get'})
}

export const removeItems = (productId: string, userId: string) => {
    return fetcher({url: '/api/deleteItems', method: 'post', body: {productId, userId}})
}

// export const signout = (id: string) => {
//     return fetcher({url: '/api/checkout_sessions', method: 'post', body: id})
// }

// export const getCart = (id: string) => {
//     return fetcher({url: '/api/getCart', method: 'post', body: id})
// }