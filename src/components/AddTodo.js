import React from 'react';

function AddTodo({addTodo}) {

    const [newTodo, setNewTodo] = React.useState({
        title: ''
    })

    const onChange = (e) => {
        setNewTodo( {[e.target.name]: e.target.value} );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo.title);
        setNewTodo({ title: '' });
    }

    return (
        <form style={{ display: 'flex' }} onSubmit={ onSubmit }>
            <input style={{ flex: '10' , padding: '5px'}}
                type="text"
                name="title"
                placeholder="What do I need to get done..." 
                value={ newTodo.title }
                onChange={ onChange }
            />
            <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}
            />
        </form>
    )
}

export default AddTodo