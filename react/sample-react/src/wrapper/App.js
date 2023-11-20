import React from 'react'
import Wrapper from './Wrapper'

export default function App() {

    //consumer ->
  return (
    <>
        <Wrapper> 
            {/* <p>I am the wrapper child</p>
            <div>I am the second</div> */}
            {
                (here)=> {
                    return <>
                        <div>naman</div>
                        {console.log(here)}
                    </>
                }
            }{/* Traditional code of a consumer -> */}
        </Wrapper>
    </>
  )
}
