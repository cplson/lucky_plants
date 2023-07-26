import options from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Home() {
//   const session = await getServerSession(options)
//     console.log('homepage session:', session)
  return (
    <>
     <h1>fack</h1>
    </>
  )
}