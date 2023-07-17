'use client'
import { useEffect } from "react";
import { ShoppingCart } from "react-feather";
import { useRouter}from 'next/navigation'

export default async function Cart({cookieString}) {
  const router = useRouter()
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getCart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieString,
        },
      });
  
      if (!response.ok) {
        throw new Error("Fetch error");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const cart = await getData();
  
  // console.log('cart in Cart:', cart)
  return (
    <div className="flex justify-content-end ml-8 relative">
      <ShoppingCart className="" />
      {cart.items.length > 0 && (
        <div className="absolute -right-4 -top-4 text-white bg-red-500 px-2 py-1 rounded-full">
          {cart.items.length}
        </div>
      )}
    </div>
  );
}
