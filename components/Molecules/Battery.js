import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'

export const Battery = () => {

    const [levelBattery, setLevelBattery] = useState(0);
    const [colorBattery, setColorBattery] = useState('red');

    const levelColorBattery = ( level ) => {

        if ( level > 50 ) {
            setColorBattery('green');
        } else if ( level <= 50 && level >= 25 ) {
            setColorBattery('yellow');
        } else {
            setColorBattery('red');
        }
    }

    return (

        <View style={styles.containerBattery}>
            <View style={[styles.battery, {backgroundColor: `${colorBattery}`} ]}> 
            </View>      
            <Text style={styles.text}>341 km</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerBattery: {
        width: Dimensions.get('window').width - 36,
        flex: 1,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 6,
        backgroundColor: '#7C7475',
        maxHeight: 90,
        flexDirection: 'row'
    },
    battery: {
        flexDirection: 'row',
        color: 'white',
        width: '30%',
    },
    text: {
        fontSize: 25,
        color: 'white',
        width: '100%',
        position:'absolute',
        top: '30%',
        textAlign: 'center',
        flex: 1
    }
})
