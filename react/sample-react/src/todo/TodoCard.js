import React from 'react'
import { FaCheck, FaConfluence } from "react-icons/fa";
import './style.css'

export default function TodoCard({todo, toggleDone}) {
  return (
    <div style={{
        display: 'flex', 
        justifyContent: 'space-between',
        fontSize: '1.5rem'
    }}>
        <span className={`${todo.isCompleted ?'todoCompleted': ''}`}>{todo.todo}</span>
        <div>
            <span onClick={() => toggleDone(todo._id)} className='pointer'>
                {!todo.isCompleted ? <FaCheck /> : <FaConfluence />}
            </span>
            {/* <span></span> */}
        </div>
    </div>
  )
}
