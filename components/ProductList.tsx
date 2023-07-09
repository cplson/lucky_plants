import { db } from "@/lib/db";
import Product from "@/components/Product";
export default async function ProductList() {
  const products = await getProducts();
  return (
    
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
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
