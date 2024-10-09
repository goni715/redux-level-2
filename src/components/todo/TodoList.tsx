import { useContext } from "react";
import { TodoContext, TTodo } from "../../context/TodoProvider";

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext);
    return (
      <>
        <div className="px-16 space-y-3">
          {state?.map((item: TTodo, index: number) => (
            <p 
              key={item?.id} 
              onClick={()=>dispatch({type:'taskComplete', payload: item?.id})}
              className={`w-fit px-2 py-1 cursor-pointer border rounded-md ${item.isCompleted && 'border-red-500'} `}
            >
              {Number(index + 1)}. {item?.title}
            </p>
          ))}
        </div>
      </>
    );
};

export default TodoList;