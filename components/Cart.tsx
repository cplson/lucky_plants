import { ShoppingCart } from "react-feather";
import CartCount from '@/components/CartCount'

export default function Cart() {
  return (
    <div className="flex justify-content-end ml-8">
      <ShoppingCart/>
      <CartCount/>
    </div>
  );
}
