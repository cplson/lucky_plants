import Image from "next/image";
import { Product } from "@prisma/client";
import CartButton from "./CartButton";
import { Session, getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { getItemFromCart } from "@/lib/api";
import { db } from "@/lib/db";


async function Product({ product }: { product: Product }) {
  const count = await getData(product)
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
        <p className="ml-1 text-2xl font-medium text-stone-500">
          <span className="mr-1">$</span>
          {product.price}
        </p>

        <CartButton product={product}  count={count as number}/>
      </div>
    </div>
  );
}

const getData = async (product: Product) => {
  const session = await getServerSession(options)

  if(session){
    const cart = await db.cart.findUnique({
      where:{
        shopperId: session!.user!.id
      },
      include:{
        items: true
      }
    })
    return cart!.items.filter(item => item.productId == product.id).length
  }
  return 0
}

export default Product;
