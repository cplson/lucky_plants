import { db } from "@/lib/db";
import { authenticateUser } from "@/lib/dbHelpers";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";


export default async function deleteItems(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const user = await authenticateUser(req)
    const cart = await db.cart.findFirstOrThrow({
        where:{
            shopperId: user.id
        },
        include:{
            items: true
        }
    })

    await db.cartItem.deleteMany({
        where:{
            productId: req.body
        }
    })

    res.status(201).json({});
  }