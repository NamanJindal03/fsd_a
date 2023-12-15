import React, {useState} from 'react'
import Child from './Child';
import Child2 from './Child2';
export default function App({anyRandomState}) {
    console.log('triggered app')
    const [state1, setState1] = useState("one");
    const [state2, setState2] = useState("two");
    const [state3, setState3] = useState(0);
    const [data, setData] = useState(100);
    const [value, setValue] = useState(0)

    const stat1 = React.useMemo(() => [1,2,3], [anyRandomState]);
    const stat2 = React.useCallback(() => {}, []);
    function handleClick(){
       setState1("ten");
       setState2("twenty")
       setState3((prev) => prev + 1 )
       setValue((prev)=>prev+1)
    }

  return (
    <div>
        <button onClick={handleClick}>Change Values</button>
        <Child 
            state1={state1} 
            state2={state2} 
            state3={state3} 
            stat1={stat1}
            stat2= {stat2}

        />
        <Child2 data={data} value={value}/>
    </div>
  )
}
