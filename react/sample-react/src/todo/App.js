import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm';
import 'react-toastify/dist/ReactToastify.css';
import TodoDisplay from './TodoDisplay';

export default function App() {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (todoObj) => {
        //TODO:check whether todo exists before or not -> return false
        setTodoList((prev) => [...prev, todoObj]);
        const todoLocalStorage = JSON.parse(localStorage.getItem('todos')) || [];
        const newTodoLocalStorage = [...todoLocalStorage, todoObj];
        localStorage.setItem('todos', JSON.stringify(newTodoLocalStorage));
        return true;
    }
    const toggleDone = (id) => {
        const changedTodoArr = todoList.map((todo) => {
            if(todo._id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        })
        setTodoList(changedTodoArr);
    }
    const clearTodos = () => {
        setTodoList([])
    }
    useEffect(()=>{
        const todoLocalStorage = JSON.parse(localStorage.getItem('todos')) || [];
        setTodoList(todoLocalStorage);
    }, [])
  return (
    <>
        <div>App</div>
        <TodoForm addTodo={addTodo}/>
        <TodoDisplay todoList={todoList} toggleDone={toggleDone}/>
        {todoList.length> 0 && <button onClick={clearTodos}>
            Clear Todos
        </button>}
    </>
  )
}
