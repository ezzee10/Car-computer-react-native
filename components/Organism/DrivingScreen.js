import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Speedometer } from '../Molecules/Speedometer'
import { Battery } from '../Molecules/Battery'

export const DrivingScreen = () => {

    return (

        <View style={styles.containerDriving}>
        
            <Speedometer />
        
            <Battery />

        </View>

    
    )
}

const styles = StyleSheet.create({
    containerDriving: {
        alignItems: 'center',
        marginTop: 30,
        flex: 1
    },

})
