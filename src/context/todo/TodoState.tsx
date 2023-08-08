import React, { useContext, useReducer } from 'react'
import { Alert } from 'react-native'
import { ScreenContext } from '../screen/screenContext'
import {
	ADD_TODO,
	CLEAN_ERROR,
	FETCH_TODOS,
	HIDE_LOADER,
	REMOVE_TODO,
	SHOW_ERROR,
	SHOW_LOADER,
	UPDATE_TODO,
} from '../types'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const TodoState = ({ children }: React.PropsWithChildren) => {
	const initialState = {
		todos: [],
		loading: false,
		error: null,
	}

	const { changeScreen } = useContext(ScreenContext)
	const [state, dispatch] = useReducer(todoReducer, initialState)

	const addTodo = async (title: string) => {
		const response = await fetch(
			'https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title }),
			}
		)
		const data = await response.json()
		// check in console
		console.log(data)
		dispatch({ type: ADD_TODO, title })
	}
	const removeTodo = id => {
		const todo = state.todos.find(t => t.id === id)
		Alert.alert(
			'Remove element',
			`Are you sure, want delete this element: "${todo.title}"?`,
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Remove',
					style: 'destructive',
					onPress: async () => {
						changeScreen(null)
						await fetch(
							`https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
							{
								method: 'DELETE',
								headers: { 'Content-Type': 'application/json' },
							}
						)
						dispatch({ type: REMOVE_TODO, id })
					},
				},
			]
		)
	}

	const fetchTodos = async () => {
		showLoader()
		const response = await fetch(
			'https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			}
		)
		const data = await response.json()
		// check in console
		console.log('fetch Data', data)
		const todos = Object.keys(data).map(key => ({ id: key, ...data[key] }))
		dispatch({ type: FETCH_TODOS, todos })
		hideLoader()
	}

	const updateTodo = async (id: string, title: string) => {
		await fetch(
			`https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
			{
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title }),
			}
		)
		dispatch({ type: UPDATE_TODO, id, title })
	}

	const showLoader = () => dispatch({ type: SHOW_LOADER })

	const hideLoader = () => dispatch({ type: HIDE_LOADER })

	const showError = error => dispatch({ type: SHOW_ERROR, error })

	const clearError = () => dispatch({ type: CLEAN_ERROR })

	return (
		<TodoContext.Provider
			value={{
				todos: state.todos,
				loading: state.loading,
				error: state.error,
				addTodo,
				removeTodo,
				updateTodo,
				fetchTodos,
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}
