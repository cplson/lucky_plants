'use client'

import { Cart, Product } from "@prisma/client"
import Button from "./Button"
import { FC, HTMLAttributes } from "react"
import { removeItems } from "@/lib/api";
import { ButtonProps } from "./Button";


type DeleteBtnProps = {
 product: Product
 userId: string
 updateCount: (arg0: number) => void
} & ButtonProps
const DeleteButton: FC<DeleteBtnProps> = ({product, userId, updateCount}) =>{
    const deleteItems = () => {
        removeItems(product.id, userId)
        updateCount(0)
      }
    return (
        <Button size="small" onClick={deleteItems}>Delete</Button>
    )
}

export default DeleteButton