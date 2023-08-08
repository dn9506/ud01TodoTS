import React, { FC, useCallback, useContext, useEffect } from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { AppLoader } from '../components/ui/AppLoader'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'

interface IMainScreen {
	todos: {
		id: string
		title: string
	}[]
	addTodo: (elem: string) => void
	removeTodo: (elem: string) => void
	openTodo: (elemOpenId: string) => void
}

export const MainScreen: FC = () => {
	const { addTodo, removeTodo, todos, fetchTodos, loading, error } =
		useContext(TodoContext)
	const { changeScreen } = useContext(ScreenContext)

	const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])
	useEffect(() => {
		loadTodos()
	}, [])

	if (loading) {
		return <AppLoader />
	}

	let content = (
		<FlatList
			style={styles.flatListContainer}
			data={todos}
			horizontal={false}
			keyExtractor={item => item.id.toString()}
			renderItem={({ item }) => (
				<Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
			)}
		/>
	)

	if (todos.length === 0) {
		content = (
			<View style={styles.imgWrap}>
				<Image
					style={styles.img}
					source={require('../../assets/no-items.png')}
				/>
			</View>
		)
	}

	return (
		<View>
			<View style={styles.container}>
				<AddTodo add={addTodo} />
				{content}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
	flatListContainer: {
		paddingTop: 5,
	},
	imgWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: 300,
	},
	img: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
})
