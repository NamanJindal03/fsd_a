import React from 'react'

export default function Wrapper(props) {

    console.log(props.children);
  return (
    <>
        
    <div>
        I am the wrapper head {/* a new component -> header compoentn */}
    </div>

    <h1>Body starts from here</h1>
    <div style={{backgroundColor: 'blue'}}>{props.children('from child')}</div>

    <div>I am the wrapper footer</div> {/* a different component -> footer compoent  */}
    </>
  )
}
