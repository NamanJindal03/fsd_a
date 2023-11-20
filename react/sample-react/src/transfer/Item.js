import React from 'react'

export default function Item({item, handleCheckedItems}) {
  return (
    <div className='item flex'>
      <input type="checkbox" onChange={() => handleCheckedItems(item)}/>
      <span>{item}</span>
    </div>
  )
}
