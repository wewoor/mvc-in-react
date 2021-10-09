import TodoList from "../components/list"
import { Todo } from "../model/todoModel";
import './style.css';

interface TodoListViewProps {
    inputRef: React.RefObject<HTMLInputElement>,
    data: Todo[];
    onAdd():void;
    onRemove(id: string):void;
    onFinished(id: string):void;
}

export function TodoListView(props: TodoListViewProps) {
    const { onAdd, inputRef, onRemove, data = [], onFinished } = props;

    return (
        <div className="todoListView">
            <div className="todoListInput">
                <input ref={inputRef}/>
                <button onClick={onAdd}>Add</button>
            </div>
            <TodoList data={data} onRemove={onRemove} onFinished={onFinished}/>
        </div>
    )
}
