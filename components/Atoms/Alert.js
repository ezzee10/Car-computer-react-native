import React from 'react'
import {
    StyleSheet,
    Text,
  } from 'react-native'

export const Alert = ({ message }) => {
    return (
        
        <Text style={styles.error}> { message } </Text>
    )
}

const styles = StyleSheet.create({

    error: {
        color: 'red',
        fontSize: 18,
        position: 'relative',
        top: -15,
    }
})
