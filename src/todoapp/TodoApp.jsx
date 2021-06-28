import React, { useReducer, useState } from 'react';

const types = {
    add:    'add',
    update: 'update',
    delete: 'delete'
};

const initialTodo = [
    {id: 1, title: 'Todo #1'},
    {id: 2, title: 'Todo #2'},
];

const reducer = (state, action) => {
    switch(action.type){

        case types.add:
            return [...state, action.payLoad ];

        case types.update: {
            const todoEdit = action.payLoad;
            return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo)
        }

        case types.delete:
            return state.filter(todo => todo.id !== action.payLoad);

        default:
            return state
    };
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(reducer, initialTodo);
    const [ text, setText ] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTodo = {id: Date.now() , title: text}
        dispatch({
            type: types.add,
            payLoad: newTodo
        });
        reset();
    };

    const reset = () =>{
        setText('')
    }

    return (
        <>
        <h2>Bienvenido</h2>
        <ul>
            {
            todos.map(res => (
            <li key={res.id}>
                {res.title}

            <button onClick={() => dispatch({
                    type: types.delete,
                    payLoad: res.id
            })}>
                Delete
            </button>

            <button onClick={() => dispatch({
                    type: types.update,
                    payLoad: { ...res, title: text }
            })}>
                Update
            </button>

            </li>
                ))
            };
        </ul>
        <form onSubmit={handleSubmit}>
        <input  type="text"
                placeholder="text" 
                value={text}
                onChange={ e => setText(e.target.value) }/>
                <button>
                    Create
                </button>
        </form>
        </>
    )
}




