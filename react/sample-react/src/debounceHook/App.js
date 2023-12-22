import React, { useState } from 'react'
import useDebounce from './useDebounce'

export default function App() {
    const [inputValue, setInputValue] = useState('')
    const debouncedValue = useDebounce(inputValue, 1000)
  return (
    <>
        <input 
            type="text" 
            name="name" 
            id="name" 
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
        />
        <p>
            Debounced value: {debouncedValue}
        </p>
    </>
  )
}
