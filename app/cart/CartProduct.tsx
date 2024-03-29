"use client";

import Image from "next/image";
import { Product } from "@prisma/client";
import { FC, useState } from "react";
import CartButton from "@/components/CartButton";
import DeleteButton from "@/components/DeleteButton";

type CartItemProps = {
  product: Product;
  count: number;
  userId: string;
};
const CartItem: FC<CartItemProps> = ({ product, count, userId }) => {
  console.log("product is:", product);
  console.log("count is:", count);
  console.log("userId is:", userId);
  const [thisCount, updateCount] = useState(count);

  return (
    <>
      {thisCount > 0 && (
        <>
          <div className="w-48 mx-auto md:w-full md:flex md:justify-between">
            <div className="">
              <h1 className="text-xl font-semibold text-stone-700 tracking-wide mb-2">
                {product.name}
              </h1>
              <div className="relative w-48 h-48">
                <Image
                  className="object-cover rounded-lg border-2 border-gray-700"
                  src={product.url}
                  fill
                  alt={product.name}
                />
              </div>
            </div>
            <div className="flex justify-between mt-4 md:flex-col md:justify-between md:items-end">
              <div className="md:flex-col md:items-end">
                <div className="text-2xl font-semibold">${product.price}</div>
                <div className="text-lg">
                  <span className="font-semibold">Qty:</span> {count}
                </div>
              </div>
              <div className="flex flex-col items-end justify-between md:flex-row">
                <CartButton
                  product={product}
                  count={count}
                  text={"Edit"}
                  className={"md:mr-4"}
                />
                <DeleteButton
                  product={product}
                  userId={userId}
                  updateCount={updateCount}
                />
              </div>
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default CartItem;
