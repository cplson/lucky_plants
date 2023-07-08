// Fetcher is our main API handler
import { NewUser, User } from "./types"
import { FC } from "react"

type FetchData = {
    url: string
    method: string
    body?: User | NewUser
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