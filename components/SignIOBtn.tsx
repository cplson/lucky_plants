"use client"

import Link from "next/link"
import { useSession, getSession, signOut, signIn } from "next-auth/react"
import { useState } from "react"


export default function SignoutBtn({turnInactive}: {turnInactive: () => void}){
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState()
    console.log('session', session)
    return(
        <div>
            {
                session ?
                <button className="lg:border-2 lg:border-black lg:rounded-2xl lg:px-3 lg:py-1  lg:hover:text-white lg:hover:bg-black" onClick={() => {signOut(); turnInactive()}}>Sign Out</button> :
                <Link href='/signin'><button className="lg:border-2 lg:border-black lg:rounded-2xl lg:px-3 lg:py-1  lg:hover:text-white lg:hover:bg-black" onClick={() => {signIn(); turnInactive()}}>Sign In</button></Link> 
            }
        </div>
    )
}

