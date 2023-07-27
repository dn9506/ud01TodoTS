import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { useState } from 'react';
import { Todo } from './src/Todo';


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



  return (
    <View >
      <Navbar title={'Title'} />
      <View style={styles.container}>
        <AddTodo add={addTodo} />

        <FlatList
          style={{ paddingBottom: 0 }}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,

  },

});
