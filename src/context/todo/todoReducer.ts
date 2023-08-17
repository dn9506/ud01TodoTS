import {
	ITodoReducerState,
	TypeTodoReducerAction,
	countActionTodo,
} from '../types'

// const handlers = {
// 	[countActionTodo.ADD_TODO]: (state, { title, id }) => ({
// 		...state,
// 		todos: [...state.todos, { id, title }],
// 	}),
// 	[countActionTodo.REMOVE_TODO]: (state, { id }) => ({
// 		...state,
// 		todos: state.todos.filter(todo => todo.id !== id),
// 	}),
// 	[countActionTodo.UPDATE_TODO]: (state, { title, id }) => ({
// 		...state,
// 		todos: state.todos.map(todo => {
// 			if (todo.id === id) {
// 				todo.title = title
// 			}
// 			return todo
// 		}),
// 	}),
// 	[countActionTodo.SHOW_LOADER]: state => ({ ...state, loading: true }),
// 	[countActionTodo.HIDE_LOADER]: state => ({ ...state, loading: false }),
// 	[countActionTodo.CLEAR_ERROR]: state => ({ ...state, error: null }),
// 	[countActionTodo.SHOW_ERROR]: (state, error) => ({ ...state, error }),
// 	[countActionTodo.FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
// 	DEFAULT: state => state,
// }

export const todoReducer = (
	state: ITodoReducerState,
	action: TypeTodoReducerAction
): ITodoReducerState => {
	switch (action.type) {
		case countActionTodo.ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, { id: action.id, title: action.title }],
			}
		}
		case countActionTodo.REMOVE_TODO: {
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id),
			}
		}
		case countActionTodo.FETCH_TODOS: {
			return {
				...state,
				todos: action.todos,
			}
		}
		case countActionTodo.UPDATE_TODO: {
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.id) {
						todo.title = action.title
					}
					return todo
				}),
			}
		}
		case countActionTodo.SHOW_LOADER: {
			return {
				...state,
				loading: true,
			}
		}
		case countActionTodo.HIDE_LOADER: {
			return {
				...state,
				loading: false,
			}
		}
		case countActionTodo.SHOW_ERROR: {
			return {
				...state,
				error: action.error,
			}
		}
		case countActionTodo.CLEAR_ERROR: {
			return {
				...state,
				error: null,
			}
		}
		default: {
			return state
		}
	}
}
