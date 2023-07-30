import React, { FC } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'

interface ITodo {
    todo: {
        id: string,
        title: string
    },
    key?: string,
    onRemove: (elemRemoteId: string) => void,
    onOpen: (elemOpenTodo: string) => void

}

export const Todo: FC<ITodo> = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity
            onPress={() => onOpen(todo.id)}
            onLongPress={() => onRemove(todo.id)}

            activeOpacity={0.5}
        >
            <View style={styles.todo} >
                <Text>
                    {todo.title}
                </Text>
            </View>
        </TouchableOpacity>
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