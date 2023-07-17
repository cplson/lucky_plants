import { NextApiRequest, NextApiResponse } from "next";
// import { db } from "@/lib/db";
import {
  getCart,
  authenticateUser,
  getItems,
  addQuantity,
  deleteQuantity,
} from "@/lib/dbHelpers";
import { Product } from "@prisma/client";
import { db } from "@/lib/db";

export default async function updateCart(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST
  if (req.method === "POST") {
    try {
      // AUTHENTICATE USER
      const user = await authenticateUser(req);
      if (user) {
        try {

          // GET CART
          const cart = await getCart(user);
          const product = req.body.product;
          const quantity = req.body.quantity;

          // GET CART ITEMS
          const items = await getItems(cart!.id, product.id);
          const currentQuantity = items.length;

          console.log("cart", cart);
          console.log("items", items);

          // DETERMINE IF ITEMS NEED TO BE REMOVED OR ADDED FROM THE CART
          if (currentQuantity < quantity) {
            // ADD
            const createQuantity = quantity - currentQuantity;
            await addQuantity(
              createQuantity,
              product,
              cart!.id
            );
            const newQuantity = await db.cartItem.findMany({
              where: {
                productId: product.id
              }
            })
            res.send({data: newQuantity.length, status: 201});
            // res.status(200);
          } else if (currentQuantity > quantity) {
            // REMOVE
            const removeQuantity = currentQuantity - quantity;
            await deleteQuantity(
              removeQuantity,
              product,
              cart!.id,
              items
            );
            const newQuantity = await db.cartItem.findMany({
              where: {
                productId: product.id
              }
            })
            res.send({data: newQuantity.length, status: 201});
          } else {
            res.send(200);
          }
        } catch (err) {
          console.log(err);
          res.status(500).json({});
        }
      }
    } catch (err) {
      res.status(403).json({ message: "please log in" });
    }
  } else {
    res.status(500).json({});
  }
}
