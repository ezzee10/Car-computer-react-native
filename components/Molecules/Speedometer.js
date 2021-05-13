import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import AnimatedSpeedometer from 'react-native-cool-speedometer'


export const Speedometer = () => {

    const [velocidad, setVelocidad] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setVelocidad(velocidad => velocidad + 10);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (

        <View style={styles.containSpeedometer}>

            <AnimatedSpeedometer
                size={250}
                value={velocidad}
                max={250}
                angle={250}
                backgroundAngle={200}
                indicatorStyle={{
                    bottom: 25,
                    fontSize: 30,
                    color: 'white'
                }}
                fontFamily='Arial'
                indicatorSuffix='km/h'
                style={styles.speedometer}
                indicatorSuffixStyle= {{
                    color: 'white'
                }}
                secondaryArcColor = {'gray'}
            /> 

        </View>
    )
}

const styles = StyleSheet.create({
    containSpeedometer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    speedometer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

