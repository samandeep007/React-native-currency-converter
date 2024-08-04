import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>


export default function Button({ name, flag}: ButtonProps): JSX.Element {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{flag}</Text>
            <Text style={styles.country}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },

    country: {
        fontSize: 14,
        color: "#2d3436"
    }
})