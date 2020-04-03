import React, { useState } from 'react'
import './App.css';

function Todo({ todo, index, completeTodo /*refer to line 54 as it's props being passed*/ }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;
    addTodo(value);
    setValue(''); //the same as setState
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className="input"
        value={value/*value of the state*/}
        onChange={e => setValue(e.target.value)}
        placeholder="add todo"
      />
    </form>
  )
}

function App() {
  const [todos /*state*/, setTodos/*method to update the state*/] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,

    },
    {
      text: 'Meet Friend for Lunch',
      isCompleted: false,

    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,

    }
  ]);


  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos); //set the state
  }


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
