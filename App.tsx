import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import { MainScreen } from './src/screens/MainScreen';
import { Navbar } from './src/components/Navbar';
import { TodoScreen } from './src/screens/TodoScreen';

interface ItodoStruct {
  id: string,
  title: string
}

export default function App() {


  const [todoId, setTodoId] = useState('0')
  const [todos, setTodos] = useState<ItodoStruct[]>([
    {id: '0', title: 'First todo'},
    {id:'1', title: 'Secont todo'}
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
    setTodos(prev => prev.filter(todo => todo.id !== id))
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
      goBack={() => setTodoId('-1')}
      todo={selectedTodo}
    />
  }

  return (
    <View>
      <Navbar title={'Title'} />
      {content}
    </View>
  );
}

