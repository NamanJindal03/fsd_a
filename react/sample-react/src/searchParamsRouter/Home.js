import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/movies', {state: {genre: 'horror'}})
        },3000)
    }, [])
  return (
    <div>Home</div>
  )
}
