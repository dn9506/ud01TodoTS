import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { Navbar } from "../Navbar";


export const TodoScreen = () => {
    return (
        <View>
            <Navbar />
            <View>
                <Text>

                </Text>
                <Button title="Edit" />
            </View>
            <View>

                <Button title="Back" />
                <Button title="Remove" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoScreenBlock: {

    }
})