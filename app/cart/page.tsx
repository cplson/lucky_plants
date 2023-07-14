import Card from "@/components/Card";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { Cart, CartItem, Product } from "@prisma/client";
import Image from "next/image";

export default async function Cart() {
  const getData = async () => {
    const user = await getUserFromCookie(cookies());
    const cart = await db.cart.findFirstOrThrow({
      where: {
        shopperId: user?.id,
      },
      include: {
        items: true,
      },
    });
    return cart;
  };

  const getUniqueItems = async (cart: Cart) => {
    const uniqueItems = await db.cartItem.findMany({
      where: {
        cartId: cart.id,
      },
      include:{
        product: true
      },
      distinct: ["productId"],
    });
    return uniqueItems;
  };

  const cart = await getData();
  const uniqueProducts = await getUniqueItems(cart);
  // console.log(uniqueProducts);
  return (
    <div>
      <Card className="shadow-md">
        <div className="">
          {uniqueProducts.map((product) => {
            return (
              <div>
                <h1>{product.product.name}</h1>
                <div className="relative" style={{ height: "100px", width: "100px" }}>
        <Image
          className="object-cover rounded-lg border-2 border-gray-700"
          src={product.product.url}
          fill
          alt={product.product.name}
        />
      </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
