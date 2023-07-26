"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useState } from "react"

export default function SignoutBtn(){
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState()
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

