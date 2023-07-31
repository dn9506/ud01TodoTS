import React, { FC } from "react";
import { View, FlatList, StyleSheet, Image } from 'react-native';
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

  let content = (
    <FlatList
      style={styles.flatListContainer}
      data={todos}
      horizontal={false}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />)}

    />)


  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image style={styles.img} source={require('../../assets/no-items.png')} />
      </View>)
  }


  return (
    <View >

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
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: "contain"
  }

});
