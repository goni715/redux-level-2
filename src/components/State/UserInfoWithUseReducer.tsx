import { ChangeEvent, useReducer } from "react";

type TAction = {
    type: string;
    payload: string;
}

const initialState = {
    name: '',
    age: 0,
    hobbies: [] as string[]
}


const reducer = (currentState: typeof initialState, action: TAction) => {
    switch (action.type){
        case 'addName':
            return { ...currentState, name: action.payload }
        case 'addAge':
            return { ...currentState, age: Number(action.payload) }
        case 'addHobby':
            return { ...currentState, hobbies:[ ...currentState.hobbies, action.payload ]}
        default:
            return currentState;
    }
}





const UserInfoWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);
    }


    return (
        <>
          <h1>Using useReducer hook</h1>
            <form onSubmit={handleSubmit} className="space-x-3 p-10">
            <input onChange={(e)=>dispatch({type:'addName', payload: e.target.value})} type="text" className="border border-gray-800 rounded-md px-3 py-2" placeholder="Your Name"/>
            <input onChange={(e)=>dispatch({type:'addAge', payload: e.target.value})} type="number" className="border border-gray-800 rounded-md px-3 py-2" placeholder="Age"/>
            <input onBlur={(e)=>dispatch({type:'addHobby', payload: e.target.value})} type="text" className="border border-gray-800 rounded-md px-3 py-2" placeholder="hobbies"/>
            <button type="submit" className="px-3 py-2 bg-purple-400 text-white mt-3 rounded-md">Submit</button>
         </form>   
        </>
    );
};

export default UserInfoWithUseReducer;