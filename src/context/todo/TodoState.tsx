import React, { useReducer } from "react";
import { TodoContext } from './todoContext';
import { todoReducer } from "./todoReducer";

export const TodoState = ({ children }: React.PropsWithChildren) => {
    const initialState = {
        todos: [
            { id: '0', title: 'First todo' },
            { id: '1', title: 'Second todo' }]
    }

    const [state, dispath] = useReducer(todoReducer, { initialState})

    return (<TodoContext.Provider value={{
        todos: state.todos
    }}>{children}</TodoContext.Provider>)
}