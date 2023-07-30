import Card from "@/components/Card";
import { db } from "@/lib/db";
import { Cart } from "@prisma/client";
import { getItemsWithProduct } from "@/lib/dbHelpers";
import PreviewPage from "@/components/CheckoutButton";
import { loadStripe } from "@stripe/stripe-js";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";
import CartProduct from "./CartProduct";
export default async function Cart() {
  const session = await getServerSession(options);
  const cart = await getItemsWithProduct(session!.user!.id);
  const getUniqueItems = async (cart: Cart) => {
    const uniqueItems = await db.cartItem.findMany({
      where: {
        cartId: cart.id,
      },
      include: {
        product: true,
      },
      distinct: ["productId"],
    });
    return uniqueItems;
  };

  const getSubtotal = () => {
    let total = 0;
    for (let item of cart.items) {
      total += item.product.price;
    }
    return total;
  };

  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const uniqueProducts = await getUniqueItems(cart);
  console.log('uniqueProducts:', uniqueProducts)
  const subtotal = getSubtotal();
  return (
    <div>
      <Card className="shadow-md max-w-3xl mx-auto">
        <div className="w-full not-first:mt-8">
          
          {uniqueProducts.map((product) => {
            const count = cart.items.filter(item => product.product.id === item.productId).length
            console.log('count:', count)
            console.log('product:', product.product)
            console.log('userId:', session!.user!.id)

           return <CartProduct key={product.id} product={product.product} count={count} userId={session!.user!.id}/>
          }
            
          )}
          <div className="md:flex justify-between items-start">
            <div className="text-2xl m-4 md:w-1/2 md:m-0">
              <span className="font-semibold">Subtotal:</span> ${subtotal}
            </div>
            <PreviewPage cart={cart} />
            {/* <PreviewPage user={user}/> */}
          </div>
        </div>
      </Card>
    </div>
  );
}
