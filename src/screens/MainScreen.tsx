import React, {useState} from "react";
import {View, FlatList, StyleSheet} from 'react-native';
import { Navbar } from '../Navbar';
import { AddTodo } from '../AddTodo';
import { Todo } from '../Todo';

interface ItodoStruct {
    id: string,
    title: string
  }

export const MainScreen = () => {

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
        <View >
      <Navbar title={'Title'} />
      <View style={styles.container}>
        <AddTodo add={addTodo} />

        <View style={styles.flatListContainer}>
          <FlatList

            data={todos}
            horizontal={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} />)}

          />
        </View>

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
  
    }
  
  });
  