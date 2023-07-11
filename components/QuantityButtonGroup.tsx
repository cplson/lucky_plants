import { InputProps } from "@/lib/types";
import { FC } from "react";
import Input from "./Input";
import Button from "./Button";

// 1. add state for quantity, and tie it to the input element
// 2. create 2 functions
//      -decrement quantity
//      -increment quantity
// 3. create api to update the cart
// 4. create onClick handler to send a POST request

// TODO: ON REGISTER, CREATE A NEW CART ROW FOR THAT USER

// this will need to be changed to handle product prop
const QuantityButtonGroup: FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <div className="flex mb-8">
        <Button
          intent="secondary"
          size="small"
          className="rounded-l-xl border-l-2 px-4"
        >
          -
        </Button>
        <Input className="border-y-black border-x-0 text-center" disabled />
        <Button
          intent="secondary"
          size="small"
          className="rounded-r-xl border-r-2 px-4"
        >
          +
        </Button>
      </div>
      <Button intent="tertiary" className="">Confirm</Button>
    </>
  );
};

export default QuantityButtonGroup;
