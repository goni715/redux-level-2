import { FormEvent, useContext, useState } from "react";
import { TodoContext, TTodo } from "../../context/TodoProvider";

const TodoForm = () => {
    const {dispatch} = useContext(TodoContext);
    const [task, setTask] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newTodo : TTodo = {
            id: Math.random().toString(),
            title: task,
            isCompleted: false
        }
        dispatch({type:'addTodo', payload: newTodo});
        setTask('');
    }


    return (
      <>
        <h1 className="text-center font-semibold text-violet-500 py-3">
          This is Todo Form using Context Api
        </h1>
        <div className="px-16 py-5">
          <h1>Add Todo</h1>
          <form onSubmit={handleSubmit}>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              className="border border-gray-800 rounded-md px-3 py-2"
              placeholder="Enter task"
              required
            />
            <button
              type="submit"
              className="ml-2 px-3 py-2 bg-purple-500 hover:bg-purple-700 text-white mt-3 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
};

export default TodoForm;