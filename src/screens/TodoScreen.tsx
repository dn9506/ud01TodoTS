import React, { FC } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

import { THEME } from "../theme";

interface ITodoScreen {
    todo: { id: string, title: string }
    goBack: () => void
}

export const TodoScreen: FC<ITodoScreen> = ({ goBack, todo }) => {
    return (
        <View>
            <AppCart>
                <Text>
                    {todo.title}
                </Text>
                <Button title="Edit" />
            </AppCart>
            <View style={styles.buttonsBlock}>
                <View style={styles.button}>

                    <Button title="Back"
                        onPress={goBack}
                        color={THEME.GREY_COLOR}
                    />
                </View>
                <View style={styles.button}>

                    <Button title="Remove"
                        color={THEME.DANGER_COLOR}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    buttonsBlock: {
        flexDirection: "row",
        justifyContent: "space-around",

    },
    button: {
        width: '40%'
    }
})