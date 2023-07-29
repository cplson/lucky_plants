// dbHelpers.ts is used for helper functions related to db data
import { db } from "./db";
import { Product, CartItem, Cart } from "@prisma/client";



export const getCart = async (id: string) => {
  return await db.cart.findUnique({
    where: {
      shopperId: id,
    },
    include: {
      items: true,
    },
  });
};

export const getItems = async (id: string, productId: string) => {
  // console.log("cartId is:", cartId);
  // console.log("productId is:", productId);

  const cart = await getCart(id)
  const items = await db.cartItem.findMany({
    where: {
      cartId: cart!.id,
      productId: productId,
    },
  });

  // console.log(items);
  return items;
};

export const addQuantity = async (
  quantity: number,
  product: Product,
  id: string,
  cart: Cart
) => {
  for (let i = 0; i < quantity; i++) {
    console.log("loop");
    await db.cartItem.create({
      data: {
        cartId: cart!.id,
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

  // Feels kind of hacky but it gets the job done
  for (let i = 0; i < quantity; i++) {
    await db.cartItem.delete({
      where: {
        id: items[i].id,
      },
    });
  }
}

export const getItemsWithProduct = async (id: string) => {
  const cart = await db.cart.findFirstOrThrow({
    where: {
      shopperId: id,
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

