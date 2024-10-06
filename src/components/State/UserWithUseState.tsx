import { useState } from "react";


const UserWithUseState = () => {

    const [user, setUser] = useState({name:'', age:'0', hobbies:[]})

    console.log(user);

    return (
        <>
          <form action="" className="space-x-3 p-10">
            <input onChange={(e)=>setUser({...user, name:e.target.value})} type="text" className="border border-gray-800 rounded-md px-3 py-2" placeholder="Your Name"/>
            <input onChange={(e)=>setUser({...user, age:e.target.value})}  type="text" className="border border-gray-800 rounded-md px-3 py-2" placeholder="Age"/>
            <input onBlur={(e)=>setUser({...user, hobbies:[...user.hobbies, e.target.value]})}  type="text" className="border border-gray-800 rounded-md px-3 py-2" placeholder="hobbies"/>
            <button type="submit" className="px-3 py-2 bg-purple-400 text-white mt-3 rounded-md">Submit</button>
         </form>   
        </>
    );
};

export default UserWithUseState;