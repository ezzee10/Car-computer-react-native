import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const ClimatizacionScreen = () => {

    return (
        <View style={styles.vista}>
            <Text>{'hola hola!'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    vista: {
      backgroundColor: 'black',
      flex: 1,
      borderWidth: 0
    }
})
