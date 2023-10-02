import React, {useState, useEffect} from 'react'
// const ABCD = 
let outsideCounter = 0;
function CounterDemo() {
    const [counter, setCounter] = useState(0);
    let functionalCounter = 0;

    return <div className="">
        <p style={{marginLeft :'10px'}}>{counter} React State Counter</p>
        <div>
            <button onClick={()=>setCounter(counter--)}>Decrease</button>
            <button onClick={()=>setCounter(counter++)}>Increase</button>
            <button onClick={()=>setCounter(0)}>Reset</button>
        </div>
        <div>
            <button onClick={()=>{console.log();counter--}}>Decrease</button>
            <button onClick={()=>{console.log(counter);counter++}}>Increase</button>
            <button onClick={()=>counter=0}>Reset</button>
        </div>

        <p style={{marginLeft :'10px'}}>{outsideCounter} outside module counter</p>
        <div>
            <button onClick={()=>outsideCounter--}>Decrease </button>
            <button onClick={()=>{
                outsideCounter++
                console.log(outsideCounter);
            }}>Increase</button>
            <button onClick={()=>outsideCounter = 0}>Reset</button>
        </div>

        <p style={{marginLeft :'10px'}}>{functionalCounter} Within Function Counter</p>
        <div>
            <button onClick={()=>functionalCounter--}>Decrease </button>
            <button onClick={()=>{
                
                functionalCounter++
                console.log(functionalCounter);
            }}>Increase</button>
            <button onClick={()=>functionalCounter = 0}>Reset</button>
        </div>
    </div>
}

export default CounterDemo