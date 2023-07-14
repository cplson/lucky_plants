import { db } from "@/lib/db";
import Product from "@/components/Product";
export default async function ProductList() {
  const products = await getProducts();
  return (
    
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {products.map((product) => {
          return  <div key={product.id}><Product product={product} /></div>
        })}
      </div>
    
  );
}

async function getProducts() {
  const result = await db.product.findMany();
  return result;
}
