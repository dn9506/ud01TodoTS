import React, {FC, useState} from "react";
import {View, FlatList, StyleSheet} from 'react-native';
import { Navbar } from '../components/Navbar';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

interface IMainScreen {
  addTodo: () => void,
  todos
}


export const MainScreen:FC<IMainScreen> = props => {

   

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
  