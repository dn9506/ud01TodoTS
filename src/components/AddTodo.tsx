import React, {  useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from "../theme";

interface IAddTodo {
    add: (title: string) => void
}

export const AddTodo = ({ add }:IAddTodo) => {


    const [value, setValue] = useState('')


    const pressHandler = () => {
        if (value.trim()) {

            add(value)
            setValue('')
        }else{
            Alert.alert('Message can`t be empty')
        }
    }


    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Enter text"
                autoCorrect={false}

            />
            <Button title="Add" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15

    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})