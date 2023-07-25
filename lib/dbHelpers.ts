// dbHelpers.ts is used for helper functions related to db data
import { User } from "@/lib/types";
import { NextApiRequest } from "next";
import { getUserFromCookie, validateJWT } from "@/lib/auth";
import { db } from "./db";
import { Product, CartItem } from "@prisma/client";
import { cookies } from "next/headers";

export const authenticateUser = async (req) => {
  if (process.env.COOKIE_NAME) {
    return await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  }
  else{
    return undefined;
  }
};

export const getCart = async (user: User) => {
  return await db.cart.findUnique({
    where: {
      shopperId: user.id,
    },
    include: {
      items: true,
    },
  });
};

export const getItems = async (cartId: string, productId: string) => {
  // console.log("cartId is:", cartId);
  // console.log("productId is:", productId);

  const items = await db.cartItem.findMany({
    where: {
      cartId: cartId,
      productId: productId,
    },
  });

  // console.log(items);
  return items;
};

export const addQuantity = async (
  quantity: number,
  product: Product,
  cartId: string
) => {
  for (let i = 0; i < quantity; i++) {
    console.log("loop");
    await db.cartItem.create({
      data: {
        cartId: cartId,
        productId: product.id,
      },
    });
  }
};

export async function deleteQuantity(
  quantity: number,
  product: Product,
  cartId: string,
  items: CartItem[]
) {
  // console.log("cartId is:", cartId);
  // console.log("productId is:", product.id);

  // Feels kind of hacky but it gets the job done
  for (let i = 0; i < quantity; i++) {
    await db.cartItem.delete({
      where: {
        id: items[i].id,
      },
    });
  }
}

export const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const cart = await db.cart.findFirstOrThrow({
    where: {
      shopperId: user?.id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
  return cart;
};
