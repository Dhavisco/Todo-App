import React, { useState } from "react"
import Todo from "../models/todo";

type TodoContextObj = {
    items: Todo[]; 
    addTodo: (text: string) => void; 
    removeTodo: (id: string) => void;
    editTodo: (id: string, newText: string) => void; 

}

export const TodosContext =  
React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: () => {},
    editTodo: () => {}
});

const TodosContextProvider: React.FC<{ 
  children: React.ReactNode 

}> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos)=> {
      return prevTodos.concat(newTodo);
    })
  }

  const removeTodoHandler = (todoId: string) => {
setTodos((prevTodos) => {
  return prevTodos.filter(todo => todo.id !== todoId)
})
  }

  const editTodoHandler = (todoId: string, newTodoText: string) => {
    setTodos((prevTodos) => prevTodos.map((todo)=> todo.id === todoId ? {...todo, text:newTodoText} : todo 
  )
);
  };


  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    editTodo:editTodoHandler
  }

    return <TodosContext.Provider 
    value={contextValue}>
      {props.children}
      </TodosContext.Provider>
};

export default TodosContextProvider;