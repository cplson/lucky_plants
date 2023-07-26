'use client'

import { Cart, Product } from "@prisma/client"
import Button from "./Button"
import { FC } from "react"
import { removeItems } from "@/lib/api";


type DeleteBtnProps = {
 product: Product
 cart: Cart
}
const DeleteButton: FC<DeleteBtnProps> = ({product, cart}) =>{
    const deleteItems = () => {
        console.log(product)
        removeItems(product.id)
      }
    return (
        <Button size="small" onClick={deleteItems}>Delete</Button>
    )
}

export default DeleteButton