//import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../../redux/features/counter/counterSlice";
//import { RootState } from "../../redux/store/store";
import { useAppDispatch, useAppSelector } from "../../redux/hook/hook";



const Counter = () => {
    //const {count} = useSelector((state:RootState)=>state.counter);
    const {count} = useAppSelector((state)=> state.counter);
    //const dispatch = useDispatch();
    const dispatch = useAppDispatch();
    
    return (
        <>
            <div className="h-screen w-full flex justify-center items-center">
                <div className="flex gap-x-4 border border-violet-500 p-10 bg-slate-50 rounded-md">
                    <button onClick={()=> dispatch(incrementByValue(5))} className="px-3 py-2 text-xl font-semibold bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Increment by 5</button>
                    <button onClick={()=> dispatch(increment())} className="px-3 py-2 text-xl font-semibold bg-green-500 hover:bg-green-700 text-white rounded-md">Increment</button>
                    <h1 className="text-3xl">{count}</h1>
                    <button onClick={()=> dispatch(decrement())} className="px-3 py-2 text-xl font-semibold bg-red-500 hover:bg-red-700 text-white rounded-md">Decrement</button>
                </div>
            </div>
        </>
    );
};

export default Counter;