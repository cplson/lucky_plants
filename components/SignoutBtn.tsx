"use client"

import Link from "next/link"

export default function SignoutBtn(){

    const signout = async () => {
        // const response = await fetch('/api/signout', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => {
        //     return res.json();
        // }).catch(err => {
        //     console.log(err);
        // })

        // console.log('response for signout:', response);
    }
    return(
        <>
            <Link href="/signin"><button onClick={signout}>Sign Out</button></Link>
        </>
    )
}