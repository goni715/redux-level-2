import TodoForm from "./components/todo/TodoForm";
import TodoProvider from "./context/TodoProvider";


const App = () => {
  return (
    <>
      <TodoProvider>
        <TodoForm/>
      </TodoProvider>
    </>
  );
};

export default App;