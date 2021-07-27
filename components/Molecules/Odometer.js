import { View, Text } from 'react-native'
import React from 'react'

export const Odometer = ({ kms }) => {
    return (
        <View>
            <Text style={{color: 'yellow', fontSize: 30}}>Kms Totales: {kms}</Text>
        </View>
    )
}
