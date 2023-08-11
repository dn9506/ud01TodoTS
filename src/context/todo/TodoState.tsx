import React, { useContext, useReducer } from 'react'
import { Alert } from 'react-native'
import { Http } from '../../http'
import { ScreenContext } from '../screen/screenContext'
import {
	ADD_TODO,
	CLEAR_ERROR,
	FETCH_TODOS,
	HIDE_LOADER,
	ITodo,
	REMOVE_TODO,
	SHOW_ERROR,
	SHOW_LOADER,
	ScreenContextType,
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
	const { changeScreen } = useContext(ScreenContext) as ScreenContextType
	const [state, dispatch] = useReducer(todoReducer, initialState)

	const addTodo = async (title: string) => {
		clearError()
		try {
			const data = await Http.post(
				'https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
				{ title }
			)
			dispatch({ type: ADD_TODO, title, id: data.name })
		} catch (e) {
			showError('Что-то пошло не так')
		}
	}

	const removeTodo = (id: string) => {
		const todo = state.todos.find((elem: ITodo) => elem.id === id)
		Alert.alert(
			'Удаление элемента',
			`Вы уверены, что хотите удалить "${todo.title}"?`,
			[
				{
					text: 'Отмена',
					style: 'cancel',
				},
				{
					text: 'Удалить',
					style: 'destructive',
					onPress: async () => {
						changeScreen(null)
						await Http.delete(
							`https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
						)
						dispatch({ type: REMOVE_TODO, id })
					},
				},
			],
			{ cancelable: false }
		)
	}

	const fetchTodos = async () => {
		showLoader()
		clearError()
		try {
			const data = await Http.get(
				'https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json'
			)
			const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
			dispatch({ type: FETCH_TODOS, todos })
		} catch (e) {
			showError('Что-пошло не так...')
			console.log(e)
		} finally {
			hideLoader()
		}
	}

	const updateTodo = async (id: string, title: string) => {
		clearError()
		try {
			await Http.patch(
				`https://ud1todo-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
			)
			dispatch({ type: UPDATE_TODO, id, title })
		} catch (e) {
			showError('Что-пошло не так...')
			console.log(e)
		}
	}

	const showLoader = () => dispatch({ type: SHOW_LOADER })

	const hideLoader = () => dispatch({ type: HIDE_LOADER })

	const showError = (error: string) => dispatch({ type: SHOW_ERROR, error })

	const clearError = () => dispatch({ type: CLEAR_ERROR })

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
