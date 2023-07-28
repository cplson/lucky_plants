"use client";
import { ProductProps } from "@/lib/types";
import { FC, startTransition, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const QuantityButtonGroup: FC<ProductProps> = ({
  product,
  id,
  count,
  closeModal,
}) => {
  const item = useState(null)
  const [quantity, setQuantity] = useState(count);
  const router = useRouter();
  console.log('id in QBG:', id)
 
  const increment = () => {
    if(typeof quantity == 'number'){
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (typeof quantity == 'number' && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  async function updateCart(
    product: Product,
    quantity: number,
    closeModal: () => void
  ) {
    console.log('quantity is:', quantity);
    const data = await fetch("http://localhost:3000/api/updateCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        product: product,
        quantity: quantity,
        id: id,
        
      }),
    }).then(res => {
      startTransition(() => {
        router.refresh()
      })
      return res.json()
    }).catch(err => {
      console.log(err)
    })
    console.log('data is:', data)
    closeModal();
  }
  return (
    <>
      <div className="flex mb-8">
        <Button
          intent="secondary"
          size="medium"
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
          size="medium"
          className="rounded-r-xl border-r-2 px-4"
          onClick={increment}
        >
          +
        </Button>
      </div>
      <Button
        onClick={() => updateCart(product, quantity, closeModal!)}
        intent="tertiary"
        size="large"
        className=""
      >
        Confirm
      </Button>
    </>
  );
};




export default QuantityButtonGroup;
