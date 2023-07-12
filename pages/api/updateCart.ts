import { NextApiRequest, NextApiResponse } from "next";
// import { db } from "@/lib/db";
import {  getCart, authenticateUser } from "@/lib/dbhelpers"


export default async function updateCart(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST
  if (req.method === "POST") {
    // attempt to validate user web token,
    // forbid access if the user cannot be validated
    try {
      // AUTHENTICATE USER
      const user = await authenticateUser(req);
      
      try {
        // 1. get the current quantity of this product that this user has 
        //    in their cart. 
        //      -that number will determine how many products will need to be 
        //       created or deleted
        //      -will probably require an if/else statement to determine if
        //       items will need to be created or deleted
        
        // GET CART
        const Cart = await getCart(user);
        console.log(Cart);

        
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
