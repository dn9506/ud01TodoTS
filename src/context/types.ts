//reducer
// export const ADD_TODO = 'ADD_TODO'
// export const UPDATE_TODO = 'UPDATE_TODO'
// export const REMOVE_TODO = 'REMOVE_TODO'
// export const CHANGE_SCREEN = 'CHANGE_SCREEN'
// export const FETCH_TODOS = 'FETCH_TODOS'
// export const SHOW_LOADER = 'SHOW_LOADER'
// export const HIDE_LOADER = 'HIDE_LOADER'
// export const SHOW_ERROR = 'SHOW_ERROR'
// export const CLEAR_ERROR = 'CLEAR_ERROR'
export enum countActionTodo {
	ADD_TODO = 'ADD_TODO',
	UPDATE_TODO = 'UPDATE_TODO',
	REMOVE_TODO = 'REMOVE_TODO',
	FETCH_TODOS = 'FETCH_TODOS',
	SHOW_LOADER = 'SHOW_LOADER',
	HIDE_LOADER = 'HIDE_LOADER',
	SHOW_ERROR = 'SHOW_ERROR',
	CLEAR_ERROR = 'CLEAR_ERROR',
}
export enum countActionScreen {
	CHANGE_SCREEN = 'CHANGE_SCREEN',
}

export interface ITodoReducerState {
	todos: ITodo[]
	loading: boolean
	error: TypeError | null
}
export interface ITodoReducerAction {
	type: countActionTodo
}
export interface IScreenReducerAction {}

export interface IScreenReducer {}

//context
export interface ITodo {
	id: string
	title: string
}
export type TodoContextType = {
	todos: ITodo[]
	loading: boolean
	error: TypeError
	addTodo: (title: string) => void
	removeTodo: (id: string) => void
	updateTodo: (id: string, title: string) => void
	fetchTodos: () => void
}

export type ScreenContextType = {
	todoId: string | null
	changeScreen: (id: string | null) => void
}
