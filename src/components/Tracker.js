import { useState, useEffect } from 'react'

export default function Tracker({ toggleWidth }) {

    const [ width, setWidth ] = useState(window.innerWidth)

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWidth(window.innerWidth)
        })
    }, [])

    
  return (
    <h1>
        {toggleWidth && `Windows width: ${width}`}
    </h1>
  )
}
