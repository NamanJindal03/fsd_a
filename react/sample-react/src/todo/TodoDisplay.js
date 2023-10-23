import React from 'react'
import TodoCard from './TodoCard'

export default function TodoDisplay({todoList, toggleDone}) {
  const todoDisplayBox = {
    backgroundColor: 'purple',
    color: 'white',
    display: 'flex',
    marginTop: '2rem',
    flexDirection: 'column',
    rowGap: '0.25rem',
    padding: '0 1rem',
  }
  return (
    <div style={todoDisplayBox}>
        {todoList.map((todo)=>(
            <TodoCard key={todo._id} todo={todo} toggleDone={toggleDone}/>
        ))}
    </div>
  )
}
