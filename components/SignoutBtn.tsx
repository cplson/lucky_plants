"use client"

import Link from "next/link"
import { getSession, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default async function SignoutBtn(){
    // const session = await getSession()
    // console.log('session:', session)

    return(
        <>
            {/* {
                status == 'unauthenticated' ?
                <Link href='/signin'><button>Sign In</button></Link> : */}
                {/* <button onClick={() => signOut}>Sign Out</button>  */}
            {/* } */}
            <button>click me</button>
        </>
    )
}