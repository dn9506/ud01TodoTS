import React, { useReducer } from "react"
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types"
import { TodoContext } from './todoContext'
import { todoReducer } from "./todoReducer"

export const TodoState = ({ children }: React.PropsWithChildren) => {
    const initialState = {
        todos: [
            { id: '0', title: 'First todo' },
            { id: '1', title: 'Second todo' }]
    }

    const [state, dispath] = useReducer(todoReducer, initialState)

    const addTodo = (title: string) => dispath({ type: ADD_TODO, title })

    const removeTodo = (id: string) => dispath({ type: REMOVE_TODO, id })

    const updateTodo = (id: string, title: string) => dispath({ type: UPDATE_TODO, id, title })


    return (<TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
    }}
    >
        {children}
    </TodoContext.Provider>)
}