import options from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";


export default async function deleteItems(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    console.log('productId:', req.body.productId)
    console.log('userId:', req.body.userId)
    const cart = await db.cart.findUnique({
        where:{
            shopperId: req.body.userId
        }
    })
    console.log('cart in delete:', cart)
    // console.log('cart in deleteItems', cart)
    await db.cartItem.deleteMany({
        where:{
            productId: req.body.productId,
            cartId: cart!.id
        }
    })

    res.status(201).json({});
  }