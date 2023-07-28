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
      const product = req.body.product;
      const quantity = req.body.quantity;
      const id = req.body.id;
      console.log(product, quantity, id)
      // GET CART ITEMS
      const cart = await db.cart.findUnique({
        where: {
          shopperId: id,
        },
        include: {
          items: true,
        },
      });

      console.log('cart:', cart)
      const currentQuantity = cart!.items.filter(
        (item) => item.productId === product.id
      ).length;
        console.log('currentQuantity:', currentQuantity)
      // DETERMINE IF ITEMS NEED TO BE REMOVED OR ADDED FROM THE CART
      if (currentQuantity < quantity) {
        // ADD
        const createQuantity = quantity - currentQuantity;
        await addQuantity(createQuantity, product, id, cart!);
        const newQuantity = await db.cartItem.findMany({
          where: {
            productId: product.id,
          },
        });
        res.send({ data: newQuantity.length, status: 201 });
        // res.status(200);
      } else if (currentQuantity > quantity) {
        // REMOVE
        const removeQuantity = currentQuantity - quantity;
        await deleteQuantity(removeQuantity, product, cart!.id, cart!.items);
        const newQuantity = await db.cartItem.findMany({
          where: {
            productId: product.id,
          },
        });
        res.send({ data: newQuantity.length, status: 201 });
      } else {
        res.send(200);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({});
    }
  }
}
