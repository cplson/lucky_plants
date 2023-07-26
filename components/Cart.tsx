"use client";
import { ShoppingCart } from "react-feather";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Cart } from "@prisma/client";

export default async function Cart() {
  const router = useRouter();

  // const getData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/getCart", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Cookie: cookieString,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Fetch error");
  //     }

  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  // const cart = await getData();

  return (
    <div
      className={clsx(
        "flex justify-content-end ml-8 relative",
        // cart?.items?.length > 0 && "mr-4"
      )}
    >
      <ShoppingCart className="" />
      {/* {cart.items.length > 0 && (
        <div className="absolute -right-6 -top-5 text-white bg-red-500 px-2 py-1 rounded-full">
          {cart.items.length}
        </div>
      )} */}
    </div>
  );
}
