import React from 'react';
import { render } from 'react-mvc';
import './App.css';
import TodoListController from './controller/todoListController';
import TodoListModel from './model/todoModel';
import { TodoListView as TodoList } from './view/todoListView';

const todoListModel = new TodoListModel();
const todoListController = new TodoListController(todoListModel);
const TodoListView = render(todoListModel, TodoList, todoListController);

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
