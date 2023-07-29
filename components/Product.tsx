import Image from "next/image";
import { Product } from "@prisma/client";
import CartButton from "./CartButton";
import { Session, getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { getItemFromCart } from "@/lib/api";


async function Product({ product }: { product: Product }) {
  const session = await getServerSession(options)
  const count = await getData(session, product)
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

        <CartButton product={product} session={session ? session : undefined} count={count as number}/>
      </div>
    </div>
  );
}

const getData = async (session: Session | null, product: Product) => {
  if(session){
    return await getItemFromCart(session!.user!.id, product.id)
  }
  return 0
}

export default Product;
