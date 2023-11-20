import React from 'react'
import Item from './Item'
export default function List({list, handleCheckedItems}) {
  return (
    <div className='list flex'>
        {list.map((item)=>(
            <Item item={item} key={item} handleCheckedItems={handleCheckedItems}/>
        ))}
    </div>
  )
}
