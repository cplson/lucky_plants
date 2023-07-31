import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";


export default async function deleteItems(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const getSubtotal = () => {
        let total = 0;
        for (let item of cart!.items) {
          total += item.product.price;
        }
        return total;
      };
    console.log('productId:', req.body.productId)
    console.log('userId:', req.body.userId)
    const cart = await db.cart.findUnique({
        where:{
            shopperId: req.body.userId
        },
        include:{
            items:{
                include: {
                    product: true
                }
            }
        }
    })
    console.log('cart in delete:', cart)
    await db.cartItem.deleteMany({
        where:{
            productId: req.body.productId,
            cartId: cart!.id
        }
    })
    getSubtotal()
    res.status(201).json({});
  }