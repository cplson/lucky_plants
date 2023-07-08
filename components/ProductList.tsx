import { db } from "@/lib/db";
import Product from "@/components/Product";
export default  async function ProductList() {
  const products = await getProducts();
  return <ul>
  
  {products.map((product) => {
    return(
        <li><Product product={product} /></li>
    )
  })}</ul>;
}

async function getProducts() {
  const result = await db.product.findMany();
  return result;
}
