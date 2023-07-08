import { Product as ProductType } from "@/lib/types";
import Image from "next/image";

export default function Product({ product }) {
  console.log(product.url);
  return (
    <div className=''>
      <Image src={product.url} width={200} height={200} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.stock}</p>
    </div>
  );
}
