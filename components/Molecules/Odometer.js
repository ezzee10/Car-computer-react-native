import { View, Text } from 'native-base'
import React from 'react'

export const Odometer = ({ kms }) => {
    return (
        <View>
            <Text style={{color: 'white', fontSize: 20}}>Kilometros Recorridos: {kms} kms</Text>
        </View>
    )
}
