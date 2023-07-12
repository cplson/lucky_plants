import { NextApiRequest } from "next";
import { validateJWT } from "@/lib/auth";

export const getUser = async (req: NextApiRequest) => {
    await validateJWT(req.cookies[process.env.COOKIE_NAME]);
}