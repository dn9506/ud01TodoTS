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
  },{
    id: "2",
    title: `Post `
  },{
    id: "3",
    title: `Post `
  },{
    id: "4",
    title: `Post `
  },{
    id: "5",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "2",
    title: `Post `
  },{
    id: "3",
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
        <AddTodo add={addTodo}/>

        <FlatList
        data={todos}
        renderItem={({item})=> <Todo todo={item} key={item.id}/>}
        keyExtractor={item => item.id.toString()}
        >
          
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },

});
