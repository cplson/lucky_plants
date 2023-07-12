// dbHelpers.ts is used for helper functions related to db data
import { User } from "@/lib/types";
import { NextApiRequest } from "next";
import { validateJWT } from "@/lib/auth";
import { db } from "./db";

export const authenticateUser = async (req: NextApiRequest) => {
    return await validateJWT(req.cookies[process.env.COOKIE_NAME]);
}

export const getCart = async (user: User) => {
    return await db.cart.findMany({
        where:{
            shopperId: user.id
        }
    })
}