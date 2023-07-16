import Card from "@/components/Card";
import { db } from "@/lib/db";
import { Cart } from "@prisma/client";
import Image from "next/image";
import CartButton from "@/components/CartButton";
import { getData } from "@/lib/dbHelpers";
import DeleteButton from "@/components/DeleteButton";
import PreviewPage from "@/components/CheckoutButton";
import { loadStripe } from "@stripe/stripe-js";

export default async function Cart() {
  
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
    for(let item of cart.items){
      total += item.product.price;
    }
    return total
  }
  
  // Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

  const cart = await getData();
  const uniqueProducts = await getUniqueItems(cart);
  const subtotal = getSubtotal();
  return (
    <div>
      <Card className="shadow-md max-w-3xl mx-auto">
        <div className="not-first:mt-8">
          {uniqueProducts.map((product) => {
            let count = 0;
            for (let item of cart!.items) {
              if (item.productId === product.product.id) {
                count++;
              }
            }
            return (
              <>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl font-semibold text-stone-700 tracking-wide mb-2">
                      {product.product.name}
                    </h1>
                    <div className="relative w-48 h-48">
                      <Image
                        className="object-cover rounded-lg border-2 border-gray-700"
                        src={product.product.url}
                        fill
                        alt={product.product.name}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="flex flex-col items-end">
                      <div className="text-2xl font-semibold">
                        ${product.product.price}
                      </div>
                      <div className="text-lg">
                        <span className="font-semibold">Qty:</span> {count}
                      </div>
                    </div>
                    <div className="flex">
                      <CartButton product={product.product} count={count} text={'Edit'} className={"mr-4"} />
                      <DeleteButton product={product.product} cart={cart}/>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
          <div className="flex justify-between items-start">
            <div className="text-2xl"><span className="font-semibold">Subtotal:</span> ${subtotal}</div>
            <PreviewPage cart={cart}/>
            {/* <PreviewPage user={user}/> */}
          </div>
        </div>
      </Card>
    </div>
  );
}
