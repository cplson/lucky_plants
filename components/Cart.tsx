import { ShoppingCart } from "react-feather";
import { getData } from "@/lib/dbHelpers";
export default async function Cart() {
  const cart = await getData();
  // console.log(cart)
  return (
    <div className="flex justify-content-end ml-8 relative">
      <ShoppingCart className=""/>
      {cart.items.length > 0 &&
      <div className="absolute -right-4 -top-4 text-white bg-red-500 px-2 py-1 rounded-full">{cart.items.length}</div>
    }
    </div>
  );
}
