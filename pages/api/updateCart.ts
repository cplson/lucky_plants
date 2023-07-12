import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { validateJWT } from "../../lib/auth";
import { User } from "@/lib/types";

export default async function updateCart(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST
  if (req.method === "POST") {
    // attempt to validate user web token,
    // forbid access if the user cannot be validated
    
    try {
      const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
      console.log(user.id);
      try {
        await db.cart.upsert({
          where: {
            shopperId: user.id
          },
          update: {
            quantity_0: 2
          },
          create: {
            shopperId: user.id
          }
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({})
      }
    } catch (err) {
      res.status(403).json({})
    }

    res.status(201).json({})
  } else {
    res.status(500).json({})
  }
}
