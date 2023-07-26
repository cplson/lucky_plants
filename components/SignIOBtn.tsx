"use client"

import Link from "next/link"
import { getSession, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function SignoutBtn(){
    const { data: session } = useSession()
    console.log(session)
    return(
        <>
            {
                session ?
                <button onClick={() => signOut()}>Sign Out</button> :
                <Link href='/signin'><button>Sign In</button></Link> 
            }
        </>
    )
}

