import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';


uuidv4();


const TodoWrapper = () => {
  //  saving in localstorage
  const initialState = JSON.parse(localStorage.getItem('todos')) || []
  
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  // function for adding task
  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    console.log(todos);
  }

  // function for check the task
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  // function for delete the task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  //  function for editing the tasks
  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo ))
  }

  return (
    <div className='todo-wrapper'>

      <h1 className='text-[1.5rem] text-white mb-[1rem] font-bold font-oswald '>Gets Things Done!</h1>

      

      <TodoForm addTodo={addTodo}/>

      <p className='text-white font-ubunMs my-5'>You can check the task by pressing the test of the task.</p>

      {todos.map(({task, id, completed, isEditing}) => (
        isEditing ? (
          <EditTodoForm
          task={task}
          id={id}
          editTask={editTask}
          />
        ) : (
          <Todo
          task={task}
          id={id} 
          toggleComplete={toggleComplete} 
          completed={completed}
          deleteTodo={deleteTodo}
          editTodo={editTodo} />
        )
        
      ))}
    </div>
  )
}

export default TodoWrapper
