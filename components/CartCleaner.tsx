'use client'

import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";


const clean = async (id: string) => {
    
    await fetch(`http://localhost:3000/api/clearCart?userId=${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })

    
}
export default function CartCleaner(){
    const {data: session} = useSession();
    const searchParams = useSearchParams()
    const router = useRouter()

    const success = searchParams?.get('success')
    if(success && session?.user){
        console.log('truism:', session.user.id)
        clean(session.user.id)
        router.push('/shop')
    }
    return(
        <>
        </>
    )
}
