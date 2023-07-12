"use client";
import { Product, ProductProps } from "@/lib/types";
import { FC, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { addItemToCart } from "@/lib/api";

// TODO: ON REGISTER, CREATE A NEW CART ROW FOR THAT USER       -X
// FIRST -> CREATE FETCH REQUEST TO GET CART DATA
// 1. add state for quantity, and tie it to the input element   -X
// 2. create 2 functions
//      -decrement quantity                                     -X
//      -increment quantity                                     -X
// 3. create api to update the cart
// 4. create onClick handler to send a POST request

// this will need to be changed to handle product prop
const QuantityButtonGroup: FC<ProductProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  async function getCart(product: Product, quantity: number) {
    const result = await addItemToCart({product, quantity});
    console.log("result of addItemToCart POST request:", result);
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
      <Button onClick={() => getCart(product, quantity)} intent="tertiary" className="">
        Confirm
      </Button>
    </>
  );
};



export default QuantityButtonGroup;
