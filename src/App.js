import React, { useState } from 'react'
import './App.css';

function Todo({ todo, index }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
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


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}

      </div>
    </div>
  )
}

export default App;
