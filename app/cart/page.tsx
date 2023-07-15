import Card from "@/components/Card";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { Cart, CartItem, Product } from "@prisma/client";
import Image from "next/image";
import Button from "@/components/Button";

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
      include: {
        product: true,
      },
      distinct: ["productId"],
    });
    return uniqueItems;
  };

  const cart = await getData();
  const uniqueProducts = await getUniqueItems(cart);
  return (
    <div>
      <Card className="shadow-md max-w-3xl mx-auto">
        <div className="not-first:mt-8">
          {uniqueProducts.map((product) => {
            let count = 0;
            for (let item of cart!.items) {
              if (item.productId === product.product.id) {
                count++;
              }
            }
            return (
              <>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl font-semibold text-stone-700 tracking-wide mb-2">
                      {product.product.name}
                    </h1>
                    <div className="relative w-48 h-48">
                      <Image
                        className="object-cover rounded-lg border-2 border-gray-700"
                        src={product.product.url}
                        fill
                        alt={product.product.name}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="flex flex-col">
                      <div className="text-2xl font-semibold">
                        ${product.product.price}
                      </div>
                      <div className="text-lg">
                        <span className="font-semibold">Qty:</span> {count}
                      </div>
                    </div>
                    <div className="flex">
                      <Button size="small" className="mr-4">
                        Edit
                      </Button>
                      <Button size="small">Delete</Button>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
