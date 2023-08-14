import {
	ITodoReducerAction,
	ITodoReducerState,
	countActionTodo,
} from '../types'

const handlers = {
	[countActionTodo.ADD_TODO]: (state, { title, id }) => ({
		...state,
		todos: [...state.todos, { id, title }],
	}),
	[countActionTodo.REMOVE_TODO]: (state, { id }) => ({
		...state,
		todos: state.todos.filter(todo => todo.id !== id),
	}),
	[countActionTodo.UPDATE_TODO]: (state, { title, id }) => ({
		...state,
		todos: state.todos.map(todo => {
			if (todo.id === id) {
				todo.title = title
			}
			return todo
		}),
	}),
	[countActionTodo.SHOW_LOADER]: state => ({ ...state, loading: true }),
	[countActionTodo.HIDE_LOADER]: state => ({ ...state, loading: false }),
	[countActionTodo.CLEAR_ERROR]: state => ({ ...state, error: null }),
	[countActionTodo.SHOW_ERROR]: (state, error) => ({ ...state, error }),
	[countActionTodo.FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
	DEFAULT: state => state,
}

export const todoReducerLocal = (
	state: ITodoReducerState,
	action: ITodoReducerAction
) => {
	switch (action.type) {
		case countActionTodo.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, { id, title }],
			}
		case countActionTodo.REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== id),
			}
		case countActionTodo.UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === id) {
						todo.title = title
					}
					return todo
				}),
			}
		case countActionTodo.SHOW_LOADER:
			return { ...state, loading: true }
		case countActionTodo.HIDE_LOADER:
			return { ...state, loading: false }
		case countActionTodo.CLEAR_ERROR:
			return { ...state, error: null }
		case countActionTodo.SHOW_ERROR:
			return { ...state, error }
		case countActionTodo.FETCH_TODOS:
			return { ...state, todos }
		default:
			return state
	}
	const handler = handlers[action.type] || handlers.DEFAULT
	return handler(state, action)
}
