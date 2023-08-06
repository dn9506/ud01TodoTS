import React, { useContext, useReducer } from 'react'
import { Alert } from 'react-native'
import { ScreenContext } from '../screen/screenContext'
import {
	ADD_TODO,
	CLEAN_ERROR,
	HIDE_LOADER,
	REMOVE_TODO,
	SHOW_ERROR,
	SHOW_LOADER,
	UPDATE_TODO,
} from '../types'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const TodoState = ({ children }) => {
	const initialState = {
		todos: [],
		loading: false,
		error: null,
	}

	const { changeScreen } = useContext(ScreenContext)
	const [state, dispatch] = useReducer(todoReducer, initialState)

	const addTodo = (title: string) => {
		fetch('https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/')
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
					onPress: () => {
						changeScreen(null)
						dispatch({ type: REMOVE_TODO, id })
					},
				},
			]
		)
	}

	const updateTodo = (id: string, title: string) =>
		dispatch({ type: UPDATE_TODO, id, title })

	const showLoader = () => dispatch({ type: SHOW_LOADER })

	const hideLoader = () => dispatch({ type: HIDE_LOADER })

	const showError = error => dispatch({ type: SHOW_ERROR, error })

	const clearError = () => dispatch({ type: CLEAN_ERROR })

	return <TodoContext.Provider>{children}</TodoContext.Provider>
}
