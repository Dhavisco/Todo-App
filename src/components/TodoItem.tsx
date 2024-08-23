import React from 'react'
import classes from "./TodoItem.module.css"

const TodoItem: React.FC<{text:string; onRemoveTodo: ()=> void}> = (props) => {


   if (props.text.includes('error')) {
    throw new Error('Invalid todo item!');
  }

  return (
    <li className={classes.item} onClick={ props.onRemoveTodo}>
            {props.text}
        </li>
  )
}

export default TodoItem