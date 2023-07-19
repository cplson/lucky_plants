const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
    ) {
        console.log('req.body:', req.body)
        const cart = await db.cart.findUniqueOrThrow({
            where:{
                id: req.body.cartId
            },
            include:{
                items: {
                    include: {
                        product: true
                    }
                }
            }
        })

        const uniqueItems = await db.cartItem.findMany({
          where:{
            cartId: cart.id
          },
          include:{
            product: true
          },
          distinct: ['productId']
        })
        
        console.log('uniqueItems:', uniqueItems)
  if (req.method === 'POST') {
    try {
        console.log('before session')
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: uniqueItems.map(item => {
            return{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.name
                    },
                    unit_amount: item.product.price * 100
                },
                quantity: cart.items.filter(product => product.product.id === item.productId).length
            }
        }),
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.json({url: session.url})
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}