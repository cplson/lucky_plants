import { NextApiRequest, NextApiResponse } from "next";
// import { db } from "@/lib/db";
import {  getCart, authenticateUser, getItems, addQuantity, deleteQuantity } from "@/lib/dbHelpers"
import { Product } from "@/lib/types";

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
        const product = req.body.product;
        const quantity = req.body.quantity;

        // GET CART ITEMS
        const items = await getItems(cart!.id, product.id);
        const currentQuantity = items.length;

        console.log('cart', cart);
        console.log('items', items);
        
        // DETERMINE IF ITEMS NEED TO BE REMOVED OR ADDED FROM THE CART
        if(currentQuantity < quantity){
          // ADD
          const createQuantity = quantity - currentQuantity
          const newQuantity = await addQuantity(createQuantity, product, cart!.id);
          res.status(201).json({data: newQuantity})
          // res.status(200);
        }
        else if(currentQuantity > quantity){
          // REMOVE
          const removeQuantity = currentQuantity - quantity;
          const newQuantity = await deleteQuantity(removeQuantity, product, cart!.id, items);
          res.status(201).json({data: newQuantity})
          // res.status(200);
        }else{
          res.send(200);
        }
        
      } catch (err) {
        console.log(err);
        res.status(500).json({})
      }
    } catch (err) {
      res.status(403).json({message: 'username or password is incorrect'})
    }
  } else {
    res.status(500).json({})
  }
}
