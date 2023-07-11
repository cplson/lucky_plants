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
          "bg-green-700",
          "rounded-lg",
          "hover:scale-110",
          "text-white",
          "border-transparent",
          "hover:bg-green-600",
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
        small: ["text-2xl", "px-4", "py-1"],
        medium: ["text-lg", "px-6", "py-2"],
        large: ["text-xlg", "px-8", "py-4"],
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
