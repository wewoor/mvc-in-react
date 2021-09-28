import React from 'react';
import './App.css';
import TodoListView from './view/todoListView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TodoList Example:
      </header>
      <TodoListView />
    </div>
  );
}

export default App;
