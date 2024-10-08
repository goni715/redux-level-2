import { useReducer } from "react";

const initialState = {
    name: '',
    age: '',
    hobbies: []
}


const reducer = (currentState, action) => {
    switch (action.type){
        case 'addName':
            return { ...currentState, name: action.payload}
        default:
            return currentState;
    }

}


const UserInfoWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return (
        <>
          <h1>Using useReducer hook</h1>
            <form className="space-x-3 p-10">
            <input onChange={(e)=>dispatch({type:'addName', payload: e.target.value})} type="text" className="border border-gray-800 rounded-md px-3 py-2" placeholder="Your Name"/>
            <input type="text" className="border border-gray-800 rounded-md px-3 py-2" placeholder="Age"/>
            <input type="text" className="border border-gray-800 rounded-md px-3 py-2" placeholder="hobbies"/>
            <button type="submit" className="px-3 py-2 bg-purple-400 text-white mt-3 rounded-md">Submit</button>
         </form>   
        </>
    );
};

export default UserInfoWithUseReducer;