import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import AnimatedSpeedometer from 'react-native-cool-speedometer'
import { useSelector } from 'react-redux';

export const Speedometer = () => {

    // const { velocity } = useSelector(state => state.carStatus)

    const [velocity, setVelocidad ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let RandomNumber = Math.floor( ( Math.random() * (140 - 1 + 1)) + 1 );
            setVelocidad( RandomNumber );
        }, 200);
        return () => clearInterval( interval );
    }, []);

    return (

        <View style={styles.containSpeedometer}>

            <AnimatedSpeedometer
                size={250}
                value={velocity}
                max={140}
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
        flexDirection: 'row'
    },
    speedometer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

