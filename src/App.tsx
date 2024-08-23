import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos"
import TodosContextProvider from "./store/todos-context";
import ErrorBoundary from './components/ErrorBoundary'


function App() {
  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript'), new Todo('Learn Data Analytics')];

  
  return (
    <ErrorBoundary>
      <TodosContextProvider>
       <NewTodo/>
       <Todos/>
      </TodosContextProvider>

      </ErrorBoundary>
    

  )
}

export default App
