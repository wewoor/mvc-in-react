import React from "react";
import { Controller } from "react-mvc";
import TodoListModel, { ITodoListModel } from '../model/todoModel';

class TodoListController extends Controller {

    public inputRef: React.RefObject<HTMLInputElement>;
    private todoModel: ITodoListModel;

    constructor(model: TodoListModel) {
        super();
        this.todoModel = model;
        this.inputRef = React.createRef();
        this.init();
    }

    init() {
        this.fetchList();
    }

    fetchList = () => {
        fetch('http://localhost:3000/').then((res) => {
            const mockData = [{
                id: '1',
                name: '1'
            }]
            this.todoModel.init(mockData);
        })
    }

    onAdd = () => {
        const value = this.inputRef.current?.value;
        if (value === '') {
            alert('Please input the todo content!');
            return;
        };
        this.todoModel.add({
            id: Date.now() + '',
            name: value + ''
        });
    }

    onRemove = (id: string) => {
        this.todoModel.remove(id);
    }

    onFinished = (id: string) => {
        const item = this.todoModel.get(id);
        if (item) {
            if (item.finished === true) delete item.finished;
            else item.finished = true;

            this.todoModel.update(item);
        }
    }
}

export default TodoListController;
