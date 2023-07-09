import { Product as ProductType } from "@/lib/types";
import Image from "next/image";

export default function Product({ product }) {
  console.log(product.url);
  return (
    <div className="grid-element">
      <div className='relative h-200 w-200' style={{ height: '300px', width: '300px' }}>
        <Image
          className="object-cover "
          src={product.url}
          fill
        //   sizes="(max-width: 1200px) 20vw, 20vw"
          alt={product.name}
        />
      </div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.stock}</p>
    </div>
  );
}
