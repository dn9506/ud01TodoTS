import { StyleSheet, View, Alert } from 'react-native';
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { MainScreen } from './src/screens/MainScreen';
import { Navbar } from './src/components/Navbar';
import { TodoScreen } from './src/screens/TodoScreen';


interface ItodoStruct {
  id: string,
  title: string
}

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bolt': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {

  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState('-1')
  const [todos, setTodos] = useState<ItodoStruct[]>([
    { id: '0', title: 'First todo' },
    { id: '1', title: 'Second todo' }
  ])


  

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
      todos={todos}
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
    <View style={{ flex: 1 }}>
      <Navbar title={'Title'} />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2%',
    marginTop: '1%'
  }
})