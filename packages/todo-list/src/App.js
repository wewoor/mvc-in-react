import React from 'react';
import './App.css';
import TodoListController from './controller/todoListController';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TodoList Example:
      </header>
      <TodoListController />
    </div>
  );
}

export default App;
