'use client'

import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";


const clean = async (id: string) => {
    const router = useRouter()
    await fetch(`http://localhost:3000/api/clearCart?userId=${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })

    router.push('/shop')
}
export default function CartCleaner(){
    const {data: session} = useSession();
    const searchParams = useSearchParams()

    const success = searchParams?.get('success')
    if(success && session?.user){
        console.log('truism:', session.user.id)
        clean(session.user.id)
    }
    return(
        <>
        </>
    )
}
