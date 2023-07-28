import React from "react";
import { Button, StyleSheet, TextInput, View } from 'react-native';


export const EditTodoScreen = () => {
    return (
        <View>
            <TextInput value="Todo text" />
            <View>
                <Button title="Cancel" />
                <Button title="Save" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({

})