import React from 'react'

function Child({obj}) {
    console.log('child called')
  return (
    <div>Child</div>
  )
}

export default React.memo(Child);