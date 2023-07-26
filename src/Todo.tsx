import React, { FC } from "react";
import { StyleSheet, Text, View } from 'react-native'

interface ITodo {
    todo: {
        id: string,
        title: string
    },
    key: string


}

export const Todo: FC<ITodo> = ({ todo,key }) => {
    return (
        <View style={styles.todo} key={todo.id}>
            <Text>
                {todo.id}
            </Text>
            <Text>
                {todo.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10
    }
})