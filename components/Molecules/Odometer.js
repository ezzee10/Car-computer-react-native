import { View, Text } from 'react-native'
import React from 'react'

export const Odometer = ({ kms }) => {
    return (
        <View>
            <Text style={{color: 'white', fontSize: 20}}>Kilometros Recorridos: {kms} kms</Text>
        </View>
    )
}
