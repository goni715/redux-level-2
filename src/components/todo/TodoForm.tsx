import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
    const {state, dispatch} = useContext(TodoContext);
    console.log(state);
    return (
        <>
            <h1 className="text-center font-semibold text-violet-500 py-3">This is Todo Form using Context Api</h1>
            <form>

            </form>
        </>
    );
};

export default TodoForm;