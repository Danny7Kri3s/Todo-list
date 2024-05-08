import React, { useState } from 'react'

const EditTodoForm = ({editTask, task, id}) => {

  const [query, setQuery] = useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      editTask(query, id);
    }
    setQuery('');
  };

  return (
    
    <form key={id} className='w-full mb-[1rem]' onSubmit={handleSubmit}>
      <input 
      className='input'
      type="text"
      value={query} 
      placeholder='Update Task'
      onChange={(e) => setQuery(e.target.value)}
      />
      
      <button onClick={handleSubmit} className='input-btn' type='submit'>Update</button>

    </form>
  )
}

export default EditTodoForm