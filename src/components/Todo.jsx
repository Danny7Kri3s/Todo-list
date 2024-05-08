import React from 'react'
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";


const Todo = ({task, id, toggleComplete, completed, deleteTodo, editTodo }) => {
  return (
    <div key={id} className='flex justify-between items-center bg-[#8758ff] mx-auto py-3 px-4  text-white my-[1rem] rounded-md shadow-lg '>
      
      <p onClick={() => toggleComplete(id)}
      className={`${completed ? 'completed' : 'incompleted'}`}>{task}</p>

      <div className='flex gap-4 text-white'>
        <FaPenToSquare className='cursor-pointer' onClick={() => editTodo(id)}/>
        <FaTrash className='cursor-pointer' onClick={() => deleteTodo(id)} />
      </div>
    </div>
  )
}

export default Todo
