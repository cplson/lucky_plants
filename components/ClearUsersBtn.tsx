'use client'

import { db } from "@/lib/db"

const clearUsers = async () => {
    await db.user.deleteMany()
}

export default function ClearUsersBtn(){
    return (
        <button onClick={clearUsers}>Clear Users</button>
    )
}