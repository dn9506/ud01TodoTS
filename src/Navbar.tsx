import React,{FC, ReactNode} from "react"
import { StyleSheet, Text, View } from "react-native"

interface INavbar {
    title: string
}

export const Navbar:FC<INavbar> = title => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}> {title.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10

    },
    text:{
        color: 'white',
        fontSize: 20

    }
})