import clsx from "clsx";
import { FC } from "react";
import { InputProps } from "@/lib/types";

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 py-2 text-lg w-10",
        className
      )}
      {...props}
    />
  );
};

export default Input;