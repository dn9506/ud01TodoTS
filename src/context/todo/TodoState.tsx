import React, { useContext, useReducer } from 'react'
import { Alert } from 'react-native'
import { LINK } from '../../http/dbLink'
import { Http } from '../../http/http'
import { ScreenContext } from '../screen/screenContext'
import { ITodo, ScreenContextType, countActionTodo } from '../types'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const TodoState = ({ children }: React.PropsWithChildren) => {
	const { changeScreen } = useContext(ScreenContext) as ScreenContextType
	const [state, dispatch] = useReducer(todoReducer, {
		todos: [],
		loading: false,
		error: null,
	})

	const addTodo = async (title: string) => {
		clearError()
		try {
			const data = await Http.post(`${LINK}/todos.json`, { title })
			dispatch({ type: countActionTodo.ADD_TODO, title, id: data.name })
		} catch (e) {
			showError('Что-то пошло не так')
		}
	}

	const removeTodo = (id: string) => {
		const todo = state.todos.find((elem: ITodo) => elem.id === id)
		Alert.alert(
			'Удаление элемента',
			`Вы уверены, что хотите удалить "${todo!.title}"?`,
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
						await Http.delete(`${LINK}/todos/${id}.json`)
						dispatch({ type: countActionTodo.REMOVE_TODO, id })
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
			const data = await Http.get(`${LINK}/todos.json`)
			const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
			dispatch({ type: countActionTodo.FETCH_TODOS, todos })
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
			await Http.patch(`${LINK}/todos/${id}.json`, { title })
			dispatch({ type: countActionTodo.UPDATE_TODO, id, title })
		} catch (e) {
			showError('Что-пошло не так...')
			console.log(e)
		}
	}

	const showLoader = () => {
		dispatch({ type: countActionTodo.SHOW_LOADER })
	}

	const hideLoader = () => {
		dispatch({ type: countActionTodo.HIDE_LOADER })
	}

	const showError = (error: string) => {
		dispatch({ type: countActionTodo.SHOW_ERROR, error })
	}

	const clearError = () => {
		dispatch({ type: countActionTodo.CLEAR_ERROR })
	}

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
