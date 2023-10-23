import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

export default function TodoForm({addTodo}) {
    const [todo, setTodo] = useState('');

    // function sanitizeAndAddTodo(todo){
    //     const todoObj = {
    //         todo, 
    //         isCompleted: false,
    //         _id: uuidv4(),
    //     }
    //     const isSuccess = addTodo(todoObj);
    //     if(!isSuccess) {
    //         toast.error('Something went wrong')
    //         return;
    //     }
    //     setTodo('');
    // }
    function onSubmit(e){
        e.preventDefault();
        if(todo === ''){
            toast.error("Todo can't be blank");
            return;
        }
        const todoObj = {
            todo, 
            isCompleted: false,
            _id: uuidv4(),
        }
        const isSuccess = addTodo(todoObj);
        if(!isSuccess) {
            toast.error('Something went wrong')
            return;
        }
        setTodo('');
    }
  return (
    <form 
        style={{display:'flex', justifyContent: 'center'}}
        onSubmit={onSubmit}
    >
        <input 
            type="text" 
            value={todo} 
            onChange={(e)=>{
                setTodo(e.target.value)
            }} 
            placeholder='Enter TODO'
        />
        <button> 
            Add TODO
        </button>
        <ToastContainer 
            position="bottom-right"
            theme="dark"
        />
    </form>
  )
}
