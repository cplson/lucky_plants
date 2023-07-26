import options from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

// export const dynamic = 'force-dynamic'
// export const fetchCache = 'force-no-store'

export default async function Home() {
  
  return (
    <>
     <h1>fack</h1>
    </>
  )
}