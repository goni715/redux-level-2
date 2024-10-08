import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
    const {name} = useContext(TodoContext);
    console.log(name);
    return (
        <>
            <h1 className="text-center font-semibold text-violet-500 py-3">This is Todo Form using Context Api</h1>
            <form>

            </form>
        </>
    );
};

export default TodoForm;