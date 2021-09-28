import ListItem from './listItem';

export default function TodoList(props) {
    const { data, onRemove, onFinished } = props;
    return (
        <div className="todoList">
            {
                data.map((item, index) => <ListItem 
                    key={item.id} 
                    index={index+1} {...item} 
                    onRemove={onRemove}
                    onFinished={onFinished}
                />)
            }
        </div>
    )
}