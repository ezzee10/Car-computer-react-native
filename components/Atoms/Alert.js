import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const Alert = ({ message }) => {

    const {msg , type } = message;

    return (
        
        <Text style={[type === 'success' ? styles.success : styles.error , styles.alert]}> { msg } </Text>
    )
}

const styles = StyleSheet.create({

    alert: {
        fontSize: 18,
        position: 'relative',
        top: -15,
        textAlign:'center'
    },
    error: {
        color: 'red',
    },
    success: {
        color: 'green'
    }
})
