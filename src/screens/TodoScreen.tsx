import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { EditModal } from '../components/EditModal'
import { AppCart } from '../components/ui/AppCard'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContextType, TodoContextType } from '../context/types'
import { THEME } from '../theme'

export const TodoScreen = () => {
	const { todos, updateTodo, removeTodo } = useContext(
		TodoContext
	) as TodoContextType
	const { todoId, changeScreen } = useContext(
		ScreenContext
	) as ScreenContextType
	const [modal, setModal] = useState(false)

	const todo = todos.find(t => t.id === todoId)!

	const saveHandler = (title: string) => {
		updateTodo(todo.id, title)
		setModal(false)
	}

	return (
		<View>
			<EditModal
				visible={modal}
				value={todo.title}
				onCancel={() => setModal(false)}
				onSave={saveHandler}
			/>

			<AppCart style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				<Button title='Edit' onPress={() => setModal(true)} />
			</AppCart>
			<View style={styles.buttonsBlock}>
				<View style={styles.button}>
					<Button
						title='Back'
						onPress={() => changeScreen(null)}
						color={THEME.GREY_COLOR}
					/>
				</View>
				<View style={styles.button}>
					<Button
						title='Remove'
						color={THEME.DANGER_COLOR}
						onPress={() => removeTodo(todo.id)}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonsBlock: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	button: {
		width: '40%',
	},
	title: {
		fontSize: 20,
	},
	card: {
		marginBottom: 20,
		padding: 15,
	},
})
