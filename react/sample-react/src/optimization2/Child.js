import React, { useEffect } from 'react'

export default function Child({state1, state2, state3, stat1, stat2}) {
    const options = {state1, state2}
    useEffect(()=>{
        console.log('called')
    }, [stat1, stat2])
  return (
    <div>Child</div>
  )
}
