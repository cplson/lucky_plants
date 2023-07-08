import { db } from "@/lib/db";
import Product from "@/components/Product";
export default async function ProductList() {
  const products = await getProducts();
  return (
    
      <div className="grid grid-cols-4 gap-2">
        {products.map((product) => {
          return (
            <div>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    
  );
}

async function getProducts() {
  const result = await db.product.findMany();
  return result;
}
