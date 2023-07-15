import Image from "next/image";
import CartButton from "./CartButton";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { getUserFromCookie } from "@/lib/auth";
import { Product } from "@prisma/client";

async function Product({ product }: { product: Product }) {
  const itemCount = await getData(product.id);

  return (
    <div className="flex flex-col items-center gap-2 my-8">
      <h2 className="text-xl font-semibold text-stone-700 tracking-wide">
        {product.name}
      </h2>
      <div className="relative mt-6 mb-4 w-48 h-48">
        <Image
          className="object-cover rounded-lg border-2 border-gray-700"
          src={product.url}
          fill
          alt={product.name}
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl font-medium text-stone-500">
          <span className="mr-1">$</span>
          {product.price}
        </p>
        {product.stock > 0 ? (
          <CartButton product={product} count={itemCount} />
        ) : (
          <p className="text-3xl font-bold text-amber-700">Sold Out</p>
        )}
      </div>
    </div>
  );
}

// TODO: FIND A WAY TO MAKE THIS NEVER CACHE
//        -will probably have use fetch() and then use prisma client in the api
const getData = async (id: string) => {
  const user = await getUserFromCookie(cookies());
  const cart = await db.cart.findUnique({
    where: {
      shopperId: user?.id,
    },
    include: {
      items: true,
    },
  });

  let count = 0;
  for (let item of cart!.items) {
    if (item.productId === id) {
      count++;
    }
  }
  // console.log(count)
  return count;
};

export default Product;
