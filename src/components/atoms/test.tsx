'use client'

import { useState } from "react"

export const Test = () => {
    const [counter, setCounter] = useState(0)

    return <div>
        {counter}
        <div onClick={() => setCounter(counter+1)}>+++++++++++++++=</div>
    </div>
}