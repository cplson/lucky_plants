import { ShoppingCart } from "react-feather";
import clsx from "clsx";
import { Cart } from "@prisma/client";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/lib/db";

export default async function Cart() {
  const session = await getServerSession(options);
  const id = session?.user?.id;
  const getData = async () => {
    if (session) {
      const cart = await db.cart.findUnique({
        where: {
          shopperId: id,
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });
      return cart!.items.length;
    }
    return 0;
  };
  const cartCount = await getData();

  return (
    <div
      className={clsx(
        "flex justify-content-end ml-8 relative",
        cartCount > 0 && "mr-4"
      )}
    >
      <ShoppingCart className="" />
      {cartCount > 0 && (
        <div className="absolute -right-6 -top-5 text-white bg-red-500 px-2 py-1 rounded-full">
          {cartCount}
        </div>
      )}
    </div>
  );
}
