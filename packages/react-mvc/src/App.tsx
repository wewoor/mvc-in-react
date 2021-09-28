import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListView from 'view/todoListView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        TODOList:
      </header>
      <TodoListView />
    </div>
  );
}

export default App;
