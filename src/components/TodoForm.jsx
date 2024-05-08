import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      addTodo(query);
    }
    setQuery('');
  };

  return (
    
    <form className='w-full mb-[1rem]' onSubmit={handleSubmit}>
      <input 
      className='input'
      type="text"
      value={query} 
      placeholder='What is the task today?...'
      onChange={(e) => setQuery(e.target.value)}
      />
      
      <button onClick={handleSubmit} className='input-btn' type='submit'>Add Task</button>

    </form>
  )
}

export default TodoForm
