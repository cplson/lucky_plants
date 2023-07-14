import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const buttonClasses = cva(
  [
    "overflow-hidden",
    "active:scale-100",
    "transition",
    "duration-400",
    "ease-in-out",
  ],
  {
    variants: {
      intent: {
        primary: [
          "text-green-700",
          "font-semibold",
          "hover:text-green-700",
          "hover:border-b-2",
          "hover:border-green-700",
          
        ],

        secondary: [
          "bg-sky-500",
          "text-white",
          "hover:bg-sky-700",
          "border-solid",
          "border-y-2",
          "border-black",
          "text-2xl",
          "font-semibold",
          "active:bg-sky-700/50"
        ],
        tertiary: [
          "bg-slate-100",
          "rounded-lg",
          "hover:scale-110",
          "text-black",
          "border-black",
          "border-2",
          "font-semibold",
          "scale-100",
          "hover:scale-110",
          "focus:scale-110",

        ],
        text: ["bg-transparent", "text-black", "hover:bg-gray-100"],
      },
      size: {
        small: ["text-base", "px-0", "py-0"],
        medium: ["text-2xl", "px-4", "py-1"],
        large: ["text-xl", "px-4", "py-2"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

const Button: FC<ButtonProps> = ({
  children,
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
