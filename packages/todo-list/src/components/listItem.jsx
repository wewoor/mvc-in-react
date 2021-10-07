import React from 'react';

export default function TodoItem(props) {
    const { id, name, index, finished, onRemove, onFinished } = props;
    const handleRemove = () => {
        if (onRemove) {
            onRemove(id);
        }
    }
    const handleFinished = () => {
        if (onFinished) {
            onFinished(id);
        }
    }
    return (
        <div className={`todoListItem${ finished ? ' finished': '' }`}>
            <span className="index">{index}</span>
            <span className="name">
                { finished ? <del>{name}</del> : name }
            </span>
            <button className="finished" onClick={handleFinished}>Finished</button>
            <button className="remove"  onClick={handleRemove}>Remove</button>
        </div>
    )
}