import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Navbar } from './components/Navbar'
import { TodoContext } from './context/todo/todoContext'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './theme'

export const MainLayout = () => {
	const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
	const [todoId, setTodoId] = useState('-1')

	let content = (
		<MainScreen
			todos={todos}
			addTodo={addTodo}
			removeTodo={removeTodo}
			openTodo={setTodoId}
		/>
	)

	if (todoId !== '-1') {
		const selectedTodo = todos.find(todo => todo.id === todoId)!
		content = (
			<TodoScreen
				todo={selectedTodo}
				goBack={() => setTodoId('-1')}
				onRemove={removeTodo}
				onSave={updateTodo}
			/>
		)
	}

	return (
		<View>
			<Navbar title='Todo App!' />
			<View style={styles.container}>{content}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: THEME.PADDING_HORIZONTAL,
		paddingVertical: 20,
	},
})
