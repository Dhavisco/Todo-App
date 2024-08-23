// import React from 'react'
// import classes from "./TodoItem.module.css"

// const TodoItem: React.FC<{text:string; onRemoveTodo: ()=> void}> = (props) => {


//    if (props.text.includes('error')) {
//     throw new Error('Invalid todo item!');
//   }

//   return (
//     <li className={classes.item} onClick={ props.onRemoveTodo}>
//             {props.text}
//         </li>
//   )
// }

// export default TodoItem

import React, { useState, useContext } from 'react';
import classes from './TodoItem.module.css';
import { TodosContext } from '../store/todos-context';

const TodoItem: React.FC<{ text: string; id: string; onRemoveTodo: () => void }> = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(props.text);
    const todosCtx = useContext(TodosContext);

    const startEditHandler = () => {
        setIsEditing(true);
    };

    const stopEditHandler = () => {
        setIsEditing(false);
        setEditText(props.text); // Reset the text if editing is cancelled
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(event.target.value);
    };

    const saveEditHandler = () => {
        if (editText.trim().length === 0) {
            // Prevent saving empty todo
            return;
        }
        todosCtx.editTodo(props.id, editText);
        setIsEditing(false);
    };

    return (
        <li className={classes.item}>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={changeHandler}
                    onBlur={saveEditHandler} // Save on blur
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') saveEditHandler(); // Save on Enter key press
                        if (event.key === 'Escape') stopEditHandler(); // Cancel on Escape key press
                    }}
                    autoFocus
                />
            ) : (
                <>
                    <span onClick={startEditHandler}>{props.text}</span>
                    <button className={classes.delete} onClick={props.onRemoveTodo}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
