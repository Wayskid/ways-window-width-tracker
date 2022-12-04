import { useState, useEffect } from 'react'

export default function Tracker({ toggleWidth }) {

    const [ width, setWidth ] = useState(window.innerWidth)

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWidth(window.innerWidth)
        })
    }, [])

    
  return (
    <h1 className='text-3xl font-semibold text-center'>
        {toggleWidth && `Windows width: ${width}`}px
    </h1>
  )
}
