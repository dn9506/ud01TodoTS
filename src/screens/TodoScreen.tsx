import React, { useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { AppCart } from '../components/ui/AppCard'
import { THEME } from "../theme";
import { EditModal } from "../components/EditModal";

interface ITodoScreen {
    todo: { id: string, title: string }
    goBack: () => void,
    onRemove: (id: string) => void,
    onSave: (id: string, title: string) => void
}

export const TodoScreen = ({ todo, goBack, onRemove, onSave }: ITodoScreen) => {


    const [modal, setModal] = useState(false)

    const saveHandler = (title: string) => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal
                visible={modal}
                value={todo.title}
                onCancel={() => setModal(false)}
                onSave={saveHandler} />

            <AppCart style={styles.card}>
                <Text style={styles.title}>
                    {todo.title}
                </Text>
                <Button title="Edit" onPress={() => setModal(true)} />
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
                        onPress={() => onRemove(todo.id)}
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
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})