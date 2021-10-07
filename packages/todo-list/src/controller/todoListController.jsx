import React, { useEffect, useReducer, useRef } from "react";
import TodoListModel from '../model/todoModel';
import TodoListView from '../view/todoListView';

export default function TodoListController(props) {

    const inputRef = useRef();
    const [ state, dispatch ] = useReducer(TodoListModel, []);

    const fetchList = () => {
        fetch('http://localhost:3000/').then((res) => {
            const mockData = [{
                id: '1',
                name: '1'
            }]
            handle('init', mockData);
        })
    }

    const handle = (action, payload) => {
        dispatch({
            type: action,
            payload: payload
        })
    }

    const add = () => {
        const value = inputRef.current.value;
        if (value === '') {
            alert('Please input the todo content!');
            return;
        };
        handle('add', {
            id: Date.now(),
            name: value
        });
    }

    const remove = (id) => {
        handle('remove', { id });
    }

    const setFinished = (id) => {
        const item = state.find(item => item.id === id);
        if (item) {
            if (item.finished === true) delete item.finished;
            else item.finished = true;
        }
        handle('update', item);
    }

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <TodoListView 
            data={state}
            onAdd={add}
            inputRef={inputRef}
            onRemove={remove}
            onFinished={setFinished}
        />
    )
}