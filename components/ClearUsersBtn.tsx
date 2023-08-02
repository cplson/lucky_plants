'use client'

const clearUsers = async () => {
    await fetch(`https://lucky-plants-cplson.vercel.app/api/clearUsers`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default function ClearUsersBtn(){
    return (
        <button onClick={clearUsers}>Clear Users</button>
    )
}