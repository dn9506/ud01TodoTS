import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import { MainScreen } from './src/screens/MainScreen';
import { Navbar } from './src/Navbar';

interface ItodoStruct {
  id: string,
  title: string
}

export default function App() {

  const [todos, setTodos] = useState<ItodoStruct[]>([{
    id: "1",
    title: `Post `
  }, {
    id: "2",
    title: `Post `
  }, {
    id: "3",
    title: `Post `
  }, {
    id: "4",
    title: `Post `
  }, {
    id: "5",
    title: `Post `
  }, {
    id: "6",
    title: `Post `
  }, {
    id: "7",
    title: `Post `
  }, {
    id: "8",
    title: `Post `
  }, {
    id: "9",
    title: `Post `
  }, {
    id: "10",
    title: `Post `
  }, {
    id: "11",
    title: `Post `
  }, {
    id: "12",
    title: `Post `
  }, {
    id: "13",
    title: `Post `
  }, {
    id: "14",
    title: `Post `
  }, {
    id: "15",
    title: `Post `
  }, {
    id: "16",
    title: `Post `
  }, {
    id: "17",
    title: `Post `
  }, {
    id: "18",
    title: `Post `
  }, {
    id: "19",
    title: `Post `
  }, {
    id: "20",
    title: `Post `
  }, {
    id: "21",
    title: `Post `
  },
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


  return (
    <View>
      <Navbar title={'Title'} />
      <MainScreen />
    </View>
  );
}

