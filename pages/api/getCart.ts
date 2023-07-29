import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function getCart(req: NextApiRequest, res: NextApiResponse) {
//   const {searchParams} = new URL(req.url);
// const id = searchParams.get('id');
// console.log('inside getCart()')
const {id} = req.query;
console.log('id in getCart():', id)

  const cart = await db.cart.findUniqueOrThrow({
    where: {
      shopperId: id!,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
  res.json(cart.items);
}
