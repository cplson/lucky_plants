import Card from "@/components/Card";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { Cart, CartItem } from "@prisma/client";
import Product from "@/components/Product";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {uniqueProducts.map((product) => {
            return (
              <div>
                <h1>{product.name}</h1>
                <div className="relative" style={{ height: "200px", width: "200px" }}>
        <Image
          className="object-cover rounded-lg border-2 border-gray-700"
          src={product.url}
          fill
          alt={product.name}
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
