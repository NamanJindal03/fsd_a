import React, {useReducer} from 'react'

function reducer(state, data){
    switch(data.type){
        case 'increament':
            return {...state, count: state.count+ 1}
        case 'decreament':
            return {...state, count: state.count- 1}
        case 'reset':
            return {...state, count: 0}
        case 'increaseBy10':
            return {...state, count: state.count+ 10}
        case 'decreamentBy10':
            return {...state, count: state.count- 10}
        case 'increaseByN':
            return {...state, count: state.count + (data.payload?.increasedValue || 1000)}
        default: 
            return state
    }
}

export default function App() {
    const [count, dispatch ] = useReducer(reducer, {count: 0})
  return (
    <>
        {count.count}
        <button onClick={()=> dispatch({type: 'increament'})}>Increase</button>
        <button onClick={()=> dispatch({type: 'decreament'})}>Decrease</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Resets</button>
        <button onClick={()=> dispatch({type: 'increaseBy10'})}>increase By 10</button>
        <button onClick={()=> dispatch({type: 'decreamentBy10'})}>decrease By 10</button>
        {/* <button onClick={()=> dispatch({type: 'increaseByN', payload: {increasedValue: 20}})}>increase ---</button>
        <button onClick={()=> dispatch({type: 'increaseByN', payload: {increasedValue: 90}})}>increase ---</button>
        <button onClick={()=> dispatch({type: 'increaseByN', payload: {increasedValue: -90}})}>decrease ---</button>
        <button onClick={()=> dispatch({type: 'increaseByN', payload: {increasedValuedddd: -90}})}>decrease ---</button> */}
        <button onClick={()=> dispatch({type: 'increaseByN', payload: {increasedValue: 0}})}>decrease faulty</button>
    </>
  )
}
