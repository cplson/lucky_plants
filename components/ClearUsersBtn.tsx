'use client'

const clearUsers = async () => {
    console.log('triggered clearUsers()', process.env.DOMAIN)
    await fetch(`http://localhost:3000/api/clearUsers`, {
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