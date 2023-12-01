import React from 'react'

 function Child21({c1, update}) {
    console.log('child 1')
  return (
    <>
        <div>{c1}</div>
        <button onClick={update}>change C1</button>
    </>
  )
}
export default React.memo(Child21)
