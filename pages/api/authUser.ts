import { authenticateUser } from "@/lib/dbHelpers";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";


export default async function authUser(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const user = await authenticateUser(req)
    res.send({user})
  }