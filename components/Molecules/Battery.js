import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Battery = ( { levelBattery }) => {

    if (levelBattery > 100) {
        levelBattery = 100;
    }

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
            <View style={[styles.battery, {backgroundColor: `${levelColorBattery(levelBattery)}`, width: `${levelBattery}%` }]}> 
            </View>  
            <Text style={styles.text}> { levelBattery } %</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerBattery: {
        width: '65%',
        flex: 1,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 6,
        backgroundColor: '#7C7475',
        flexDirection: 'row',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxHeight: 100
    },
    battery: {
        backgroundColor: 'red',
        height: 90
    },
    text: {
        fontSize: 25,
        color: 'white',
        width: '100%',
        textAlign: 'center',
        position: 'absolute'
    }
})
