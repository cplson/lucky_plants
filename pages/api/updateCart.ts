import { NextApiRequest, NextApiResponse } from "next";
// import { db } from "@/lib/db";
import {  getCart, authenticateUser, getItems } from "@/lib/dbHelpers"


export default async function updateCart(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST
  if (req.method === "POST") {
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
        const cart = await getCart(user);
        console.log(cart);

        // GET CART ITEMS
        const items = await getItems(cart!.id, req.body.product.id);
        console.log('number of items in cart', items.length);
        console.log('newQuantity', req.body.quantity)
        console.log(req.body);
      } catch (err) {
        console.log(err);
        res.status(500).json({})
      }
    } catch (err) {
      res.status(403).json({message: 'username or password is incorrect'})
    }

    res.status(201).json({})
  } else {
    res.status(500).json({})
  }
}
