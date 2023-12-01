import React from 'react'

function Child22({c2, update}) {
    console.log('child 2')
  return (
    <>
    
        <div>{c2}</div>
        <button onClick={update}>change C2</button>
    </>
  )
}
export default React.memo(Child22)

