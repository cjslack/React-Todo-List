import React from 'react';
import TodoItem from './TodoItem'

function Todos({todos, setTodo, delTodo}) {
    return (
        todos.map(td => {
            return (
                <TodoItem key={ td.id } todo={ td } setTodo={ setTodo } delTodo={ delTodo }/>
            )
        })
    )
}

export default Todos;
