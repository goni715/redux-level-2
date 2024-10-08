import { createContext, ReactNode } from "react";

export const TodoContext = createContext(undefined);

type TTodoProviderProps = {
    children : ReactNode;
}

const TodoProvider = ({children}: TTodoProviderProps) => {
    return (
        <>
             <TodoContext.Provider value={{name: 'Goni'}}>
                 {children}
             </TodoContext.Provider>
        </>
    );
};

export default TodoProvider;