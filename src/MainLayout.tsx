import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert } from 'react-native';
import { Navbar } from "./components/Navbar";
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from "./screens/TodoScreen";
import { TodoContext } from "./context/todo/todoContext";
import { THEME } from "./theme";



export const MainLayout = () => {
    const todoContext = useContext(TodoContext)
    const [todoId, setTodoId] = useState('-1')
    const [todos, setTodos] = useState([])

    const addTodo = (title: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: Date.now().toString(),
                title
            }

        ])
    }

    const removeTodo = (id: string) => {
        const todo = todos.find(elem => elem.id === id)!
        Alert.alert(
            'Delete element',
            `Are you shure want to delete: ${todo.title}`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        setTodoId('-1')
                        setTodos(prev => prev.filter(todo => todo.id !== id))
                    }
                }
            ],
            {
                cancelable: false,

            },
        );
    }

    const updateTodo = (id: string, title: string) => {
        setTodos(old => old.map(todo => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        }))
    }

    let content = (
        <MainScreen
            todos={todoContext.todo}
            addTodo={addTodo}
            removeTodo={removeTodo}
            openTodo={setTodoId}
        />
    )

    if (todoId !== "-1") {
        const selectedTodo = todos.find(todo => todo.id === todoId)!
        content = <TodoScreen
            todo={selectedTodo}
            goBack={() => setTodoId('-1')}
            onRemove={removeTodo}
            onSave={updateTodo}
        />
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
        paddingVertical: 20
    }
})