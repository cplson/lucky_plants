"use client"

import Link from "next/link"
import { useSession, getSession, signOut } from "next-auth/react"
import { useState } from "react"

export default function SignoutBtn(){
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState()
    console.log('session', session)
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

