import React, { FC, useState } from "react";
import { View, FlatList, StyleSheet } from 'react-native';
import { Navbar } from '../components/Navbar';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

interface IMainScreen {

  todos: {
    id: string,
    title: string
  }[],
  addTodo: (elem: string) => void,
  removeTodo: (elem: string) => void
  openTodo: (elemOpenId: string) => void

}


export const MainScreen: FC<IMainScreen> = ({ todos, addTodo, removeTodo, openTodo }) => {



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
            renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>)}

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
