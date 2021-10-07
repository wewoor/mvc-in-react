import TodoList from "../components/list"
import './style.css';

export default function TodoListView(props) {
    const { onAdd, inputRef, onRemove, data, onFinished } = props;

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