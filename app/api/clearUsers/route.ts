import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, res: Response) {
    console.log('triggered clearUsers endpoint')

    await db.cartItem.deleteMany()
    await db.cart.deleteMany()
await db.user.deleteMany()

  return NextResponse.json({
    message: "cleared users",
    status: 200,
  });
}