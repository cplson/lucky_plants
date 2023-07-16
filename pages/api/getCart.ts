import { NextApiRequest, NextApiResponse } from "next";
import { validateJWT, getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { authenticateUser, getData } from "@/lib/dbHelpers";

export default async function getCart(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const user = await authenticateUser(req)
    // console.log(user)
    
      const cart = await db.cart.findFirstOrThrow({
        where:{
            shopperId: user.id
        },
        include: {
            items: {
                include:{
                    product: true
                }
            }
        }
      })
    res.send(cart);
  
}
