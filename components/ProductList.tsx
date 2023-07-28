import { db } from "@/lib/db";
import Product from "@/components/Product";
import { getItemFromCart } from "@/lib/api";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

export default async function ProductList() {
  const products = await getProducts();
  const items = await getData()
  
  console.log('items in productList:', items)
  
  return (
    
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {products.map((product) => {
          return  <div key={product.id}><Product product={product}/></div>
        })}
      </div>
    
  );
}

async function getProducts() {
  const result = await db.product.findMany();
  return result;
}

const getData = async () => {
  const session = await getServerSession(options)
  if(session){
    console.log('productlist:', session)
    return await getItemFromCart(session!.user!.id)
  }
  return undefined
}
