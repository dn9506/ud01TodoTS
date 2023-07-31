import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native'
import { THEME } from "../theme";

interface IEditModal {
    visible: boolean,
    value: string,
    onCancel: () => void,
    onSave: (text: string) => void
}

export const EditModal = ({ visible, value, onCancel, onSave }: IEditModal) => {

    const [title, setTitle] = useState(value)

    const saveEvent = () => {
        if (title.trim() === ''){
            Alert.alert('Incorrect text')
            return
        }
        onSave(title)
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false} >
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Enter text"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64} />
                <View style={styles.buttons}>
                    <Button title="Cancel" onPress={onCancel} color={THEME.DANGER_COLOR} />
                    <Button title="Save" onPress={saveEvent} />
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})