import Image from "next/image";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import CartButton from "./CartButton";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

async function Product({ product }: { product: Product }) {
  // const itemCount = await getData(product.id);

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

        <CartButton product={product}/>
      </div>
    </div>
  );
}

// TODO: FIND A WAY TO MAKE THIS NEVER CACHE
//        -will probably have use fetch() and then use prisma client in the api
const getData = async (id: string) => {
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
