import React, {useRef, useEffect} from 'react'

export default function App() {
    const ref1 = useRef(10);
    const inputFocusRef = useRef(null);
    const initialFocusInput = useRef(null);
    console.log(ref1);
    // function abcd(){
    //     console.log(ref1.current.value)
    // }
    function formSubmit(e){
        e.preventDefault();
        console.log(ref1.current.value)
    }
    function focusWork(){
        inputFocusRef.current.value ='naman'
    }
    function blurWork(){
        inputFocusRef.current.value = ''
    }
    useEffect(()=>{
        initialFocusInput.current.focus();
    }, [])

  return (
    
    <form action="">
        <input type="text" name="" id=""  ref={initialFocusInput}/>
        <div>
            <label htmlFor="">ref usage</label>
            <input type="text" ref={ref1} />
        </div>
        <input type="text" ref={inputFocusRef} onFocus={focusWork} onBlur={blurWork}/>


        <button onClick={formSubmit}>Submit</button>
    </form>
  )
}

