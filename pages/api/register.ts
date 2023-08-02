import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { createJWT, hashPassword } from "../../lib/auth";
import { serialize } from "cookie";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });
    console.log('user:', user)
    const jwt = await createJWT(user);
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.JWT_SECRET, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    console.log('jwt', jwt)
    await createUsersCart(user.id);
    res.status(201);
    res.json({});
  } else {
    res.status(402);
    res.json({});
  }
}

async function createUsersCart(id: string) {
  await db.cart.create({
    data: {
      shopperId: id,
    },
  });
}
