import { useReducer, useState } from "react";

const useToggle = (initialState = true) => {
    const [isVisible, setIsVisible] = useState(initialState)
    //value (initial value in the starting), function which alters the value
    function handleVisible(val){
        setIsVisible(val)
    }
    return [isVisible, handleVisible]
}

export default useToggle

// function reducer(state, data){
//     return state;
// }

// //useReducer( reducer, initial state) 
// const [state, dispatch] = useReducer(reducer, {})

// dispatch({}) 