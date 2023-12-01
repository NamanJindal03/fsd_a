import React, {useState, useCallback} from 'react'
import Child21 from './Child21';
import Child22 from './Child22';

export default function App2() {
    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(0);
    const update1 = useCallback(()=>setC1(prev => prev+1) , [])
    const update2 = useCallback(()=>setC2(prev => prev+1) , [])

    // const update2(){
    //     setC2(prev => prev+1);
    // }
  return (
    <>
        <Child21 c1={c1} update={update1}/>
        <Child22 c2={c2} update={update2}/>
        {/* <button onClick={()=> setC1(prev => prev+1)}>change C1</button>
        <button onClick={()=> setC2(prev => prev+1)}>change C2</button> */}
    </>
  )
}
