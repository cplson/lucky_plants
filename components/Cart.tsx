"use client";
import { ShoppingCart } from "react-feather";
import clsx from "clsx";
import { Cart } from "@prisma/client";

export default function Cart({cartCount}: {cartCount: number}) {
  
  return (
    <div
      className={clsx(
        "flex justify-content-end ml-8 relative",
        cartCount > 0 && "mr-4"
      )}
    >
      <ShoppingCart className="" />
      {cartCount > 0 && (
        <div className="absolute -right-6 -top-5 text-white bg-red-500 px-2 py-1 rounded-full">
          {cartCount}
        </div>
      )}
    </div>
  );
}
