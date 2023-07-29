'use client'

import { Cart, Product } from "@prisma/client"
import Button from "./Button"
import { FC } from "react"
import { removeItems } from "@/lib/api";


type DeleteBtnProps = {
 product: Product
 userId: string
 count?: number
}
const DeleteButton: FC<DeleteBtnProps> = ({product, userId}) =>{
    const deleteItems = () => {
        removeItems(product.id, userId)
      }
    return (
        <Button size="small" onClick={deleteItems}>Delete</Button>
    )
}

export default DeleteButton