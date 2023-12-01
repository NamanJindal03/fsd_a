import React, {useState, useMemo} from 'react'
import Child from './Child'

export default function App() {
    console.log('called')
    const [sample, setSample] = useState(0);
    const [sample2, setSample2] = useState(0);
    const obj = useMemo(() =>{}, []);
  return (
    <>
        <div>App</div>
        <Child obj={obj}/>
        <button onClick={() => {
            setSample(0);
            setSample2(prev => prev+1)
        }}>Change State</button>
    </>
  )
}
