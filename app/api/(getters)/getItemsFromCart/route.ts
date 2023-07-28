import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const id = searchParams.get('id');
  
    const user = await db.user.findUnique({
      where: {
        id: id!,
      },
      include: {
        cart: {
          include: {
            items: true,
          },
        },
      },
    });
    if(user){
      console.log('user at endpoint:', user.cart)
      const items = user.cart?.items
      return NextResponse.json(items)
    }
  
  return new Response("Could not fetch items", { status: 500 });
}
