"use client"

import Link from "next/link"
import { useSession, getSession, signOut } from "next-auth/react"
import { useState } from "react"


export default function SignoutBtn(){
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState()
    console.log('session', session)
    return(
        <div>
            {
                session ?
                <button className="lg:border-2 lg:border-black lg:rounded-2xl lg:px-3 lg:py-1  lg:hover:text-white lg:hover:bg-black" onClick={() => signOut()}>Sign Out</button> :
                <Link href='/signin'><button className="lg:border-2 lg:border-black lg:rounded-2xl lg:px-3 lg:py-1  lg:hover:text-white lg:hover:bg-black">Sign In</button></Link> 
            }
        </div>
    )
}

