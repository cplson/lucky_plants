import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const productId = searchParams.get("productId");

  const user = await db.user.findUnique({
    where: {
      id: userId!,
    },
    include: {
      cart: {
        include: {
          items: true,
        },
      },
    },
  });

  if (user) {
    
    const quantity = user?.cart!.items.filter(
      (item) => item.productId == productId
    ).length;
    console.log("quantity is:", quantity);
    return NextResponse.json(quantity);
  }

  return new Response("Could not fetch items", { status: 500 });
}
