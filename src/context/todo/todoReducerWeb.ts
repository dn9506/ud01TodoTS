import { LINK } from '../../http/dbLink'
import {
	ITodoReducerAction,
	ITodoReducerState,
	countActionTodo,
} from '../types'

export const todoReducerWeb = (
	state: ITodoReducerState,
	action: ITodoReducerAction
) => {
	switch (action.type) {
		case countActionTodo.ADD_TODO: {
			clearError()
			try {
				const data = await Http.post(`${LINK}/todos.json`, { title })
				dispatch({ type: countActionTodo.ADD_TODO, title, id: data.name })
			} catch (e) {
				showError('Что-то пошло не так')
			}
		}
	}

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
		const todo = state.todos.find(elem => elem.id === id)
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
			await Http.patch(`${LINK}/todos/${id}.json`)
			dispatch({ type: countActionTodo.UPDATE_TODO, id, title })
		} catch (e) {
			showError('Что-пошло не так...')
			console.log(e)
		}
	}
}
