'use client'

import { Product } from "@prisma/client"
import Button from "./Button"
import { FC, startTransition } from "react"
import { removeItems } from "@/lib/api";
import { ButtonProps } from "./Button";
import { useRouter } from "next/navigation";

type DeleteBtnProps = {
 product: Product
 userId: string
 updateCount: (arg0: number) => void
} & ButtonProps
const DeleteButton: FC<DeleteBtnProps> = ({product, userId, updateCount}) =>{
    const router = useRouter()
    const deleteItems = async () => {
        await removeItems(product.id, userId)
        updateCount(0)
        startTransition(() => {
            router.refresh()
        })
      }
    return (
        <Button size="small" onClick={deleteItems}>Delete</Button>
    )
}

export default DeleteButton