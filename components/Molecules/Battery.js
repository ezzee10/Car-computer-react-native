import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Battery = ( { levelBattery }) => {

    const levelColorBattery = ( level ) => {

        if ( level > 50 ) {
            return 'green';
        } else if ( level <= 50 && level >= 25 ) {
            return 'yellow';
        } else {
            return 'red';
        }
    }

    return (

        <View style={styles.containerBattery}>
            <View style={[styles.battery, {backgroundColor: `${levelColorBattery(levelBattery)}`, width: `${ levelBattery }%` }]}> 
            </View>      
            <Text style={styles.text}> { levelBattery } %</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerBattery: {
        width: '50%',
        flex: 1,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 6,
        backgroundColor: '#7C7475',
        maxHeight: 90,
        flexDirection: 'row',
        marginBottom: 30
    },
    battery: {
        flexDirection: 'row',
        color: 'black'
    },
    text: {
        fontSize: 25,
        color: 'black',
        width: '100%',
        position:'absolute',
        top: '30%',
        textAlign: 'center',
        flex: 1
    }
})
