"use client";
import { Product, ProductProps } from "@/lib/types";
import { FC, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { addItemToCart } from "@/lib/api";

const QuantityButtonGroup: FC<ProductProps> = ({ product, count, closeModal }) => {
  console.log('count is', count);
  const [quantity, setQuantity] = useState(count);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  async function updateCart(product: Product, quantity: number, closeModal: () => void) {
    addItemToCart({product, quantity});
    closeModal();   
  }
  return (
    <>
      <div className="flex mb-8">
        <Button
          intent="secondary"
          size="small"
          className="rounded-l-xl border-l-2 px-4"
          onClick={decrement}
        >
          -
        </Button>
        <Input
          value={quantity}
          className="border-y-black border-x-0 text-center"
          disabled
        />
        <Button
          intent="secondary"
          size="small"
          className="rounded-r-xl border-r-2 px-4"
          onClick={increment}
        >
          +
        </Button>
      </div>
      <Button onClick={() => updateCart(product, quantity, closeModal!)} intent="tertiary" className="">
        Confirm
      </Button>
    </>
  );
};



export default QuantityButtonGroup;
