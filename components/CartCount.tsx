'use client'

import { useState } from "react"

export default function CartCount(){
    const [count, setCount] = useState(0);

    return <span className="ml-2">{count}</span>;
}