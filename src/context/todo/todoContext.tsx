import { createContext } from 'react';

interface ITodoStruct {
    id: string,
    title: string
}

export const TodoContext = createContext<ITodoStruct[] >([])