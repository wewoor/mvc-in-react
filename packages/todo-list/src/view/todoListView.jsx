import TodoList from "./list"
import { useState, useRef, useEffect } from "react";
import './style.css';

const defaultData = [{
    id: '1',
    name: '1'
}]

export default function TodoListView(props) {
    const [todoList, setTodoList] = useState([])
    const inputRef = useRef();

    const add = () => {
        if (inputRef.current.value === '') {
            alert('Please input the todo content!');
            return;
        };
        const nextTodoList = todoList.concat();
        nextTodoList.push({
            id: Date.now(),
            name: inputRef.current.value
        });
        setTodoList(nextTodoList);
    }

    const remove = (id) => {
        const nextList = todoList.filter(item => item.id !== id);
        setTodoList(nextList);
    }

    const setFinished = (id) => {
        const nextList = todoList.map(item => {
            if (item.id === id) {
                if (item.finished === true) delete item.finished;
                else item.finished = true;
            }
            return item;
        });
        setTodoList(nextList);
    }

    const fetchList = () => {
        fetch('http://localhost:3000/').then((res) => {
            setTodoList(defaultData);
        })
    }

    useEffect(() => {
        fetchList();
    }, [])

    return (
        <div className="todoListView">
            <div className="todoListInput">
                <input ref={inputRef}/>
                <button onClick={add}>Add</button>
            </div>
            <TodoList data={todoList} onRemove={remove} onFinished={setFinished}/>
        </div>
    )
}