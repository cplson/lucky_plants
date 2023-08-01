import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  console.log("userId in clearCart():", userId);

  const cart = await db.cart.findUnique({
    where: {
      shopperId: userId,
    },
  });

  const response = await db.cartItem
    .deleteMany({
      where: {
        cartId: cart?.id,
      },
    })
    .then(() => {
      console.log("yay");
      return NextResponse.json({
        message: "items cleared from cart",
        status: 200,
      });
    })
    .catch(() => {
      console.log("fuck");
      return NextResponse.json({
        message: "Couldn't clean items from cart.",
        status: 500,
      });
    });

  if (!response.ok) {
    return NextResponse.json({
      message: "Couldn't clean items from cart.",
      status: 500,
    });
  }
  return NextResponse.json({
    message: "items cleared from cart",
    status: 200,
  });
}
