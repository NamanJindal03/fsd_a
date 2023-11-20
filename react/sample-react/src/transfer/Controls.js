import React from 'react'

export default function Controls({handleLeftShift, handleRightShift}) {
  return (
    <div className='controls flex'>
        <button onClick={handleRightShift}>&gt;</button>
        <button onClick={handleLeftShift}>&lt;</button>
    </div>
  )
}
