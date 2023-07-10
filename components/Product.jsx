import Image from "next/image";
import Button from "./Button";
import Card from "./Card";
import CartButton from "./CartButton";

export default function Product({ product }) {
  console.log(product.url);
  return (
    <div className="flex flex-col items-center gap-2 my-8">
      <h2 className="text-xl font-semibold text-stone-700 tracking-wide">
        {product.name}
      </h2>
      <div className="relative" style={{ height: "200px", width: "200px" }}>
        <Image
          className="object-cover rounded-lg"
          src={product.url}
          fill
          alt={product.name}
        />
      </div>
      <p className="text-xl font-medium text-stone-500 tracking-wide">
        <span className="font-normal mr-1">$</span>
        {product.price}
      </p>
      {product.stock > 0 ? (
        <CartButton />
      ) : (
        <p className="text-3xl font-bold text-amber-700">Sold Out</p>
      )}
    </div>
  );
}
