import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server"


export async function GET(req: Request){
    console.log('inside API route handler');
    const {searchParams} = new URL(req.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    console.log('code:', code)
    console.log('state:', state)

    if(state == '412ef0d4-db55-467a-a90e-6483d84640d1'){
        'sheesh'
    }
    const access_token = await fetch(`https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_ID}
    &client_secret=${process.env.GITHUB_SECRET}&code=${code}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        console.log('yay got github user!',res.json())
        return res.json()
    }).catch((e) => {
        console.log(e)
        return new Error("Couldn't get Github credentials")
    })

    console.log('post github fetch with response:', access_token)

    if(!access_token.ok){
        return NextResponse.json({message: 'Couldnt get Github credentials', status:500})
    }
   return NextResponse.json({message: 'Wooo Github cred!', status: 200})
}