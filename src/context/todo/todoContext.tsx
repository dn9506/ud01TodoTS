import { createContext } from 'react'

interface ITodoContext {
	id: string
	title: string
}

export const TodoContext = createContext<ITodoContext[] | null>(null)
