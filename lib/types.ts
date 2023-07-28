import {
  ReactNode,
  InputHTMLAttributes,
  ReactElement,
  JSXElementConstructor,
} from "react";
import { Cart as CartModel, Product } from "@prisma/client";

export type Link = {
  path: string;
  text: string;
};

export type LinkProps = {
  link: Link;
};

export type CardProps = {
  className?: string;
  children: ReactNode;
};

// -InputHTMLAttributes is used to access type definitions for HTML
//  input attributes from React
// -InputProps type extends HTMLInputElement type from React
//  allowing us to use any valid input element attribute
// -className ensures we can optionaly apply tailwind classes to the input
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export type ProductProps = {
  product: Product;
  count: number,
  text: string;
  className?: string;
  closeModal?: () => void;
};

export type NewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  password: string;
};

// export type Product = {
//     id: string;
//     name: string;
//     price: number;
//     stock: number;
//     url: string;
// }

export type CartItem = {
  id: string;
  name: string;
  price: number;
  productId: string;
  cartId: string;
};

export type Cart = CartModel;
