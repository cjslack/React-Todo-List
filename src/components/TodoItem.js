import React from 'react';

function TodoItem({todo, setTodo, delTodo}) {

    // Item style
    const getStyle = () => {
        return (
            {
                textDecoration: todo.completed ? 'line-through' : 'none',
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted'
            }
        )
    }

    return (
        <div style = {getStyle()}>
            <div>
                <input type="checkbox" onClick={ setTodo.bind(todo, todo.id) }></input> { ' ' }
                <span>{ todo.title }</span>
                <button style={ btnStyle } onClick={ delTodo.bind(todo, todo.id) }>X</button>
            </div>
        </div>
    )
}

// Delete button style
const btnStyle = {
    background: 'darkred',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
