import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos"
import TodosContextProvider from "./store/todos-context";



function App() {
  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript'), new Todo('Learn Data Analytics')];

  
  return (
  
      <TodosContextProvider>
       <NewTodo/>
       <Todos/>
      </TodosContextProvider>
    

  )
}

export default App
