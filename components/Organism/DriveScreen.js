import React, { useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Speedometer } from '../Molecules/Speedometer'
import { Battery } from '../Molecules/Battery'
import { LightScreen } from './LightScreen'
import { TurningLight } from '../Molecules/TurningLight'
import { Horn } from '../Molecules/Horn'
import { PositionLight } from '../Molecules/PositionLight'
import { useSelector } from 'react-redux'

export const DriveScreen = () => {

    const [beacon, setBeacon ] = useState(false);

    const [beaconMqtt, setBeaconMqtt] = useState(false);

    const [lightRight, setLightRight] = useState(false);

    const [lightLeft, setLightLeft] = useState(false);

    const [horn, setHorn] = useState(false);

    const { carOn } = useSelector(state => state.carOn)

    useEffect(() => {

        if( beaconMqtt ) {

            const interval = setInterval(() => {
                setBeacon(beacon => !beacon);
                }, 1000);

            return () => clearInterval(interval);
        
        }

        setBeacon(false);
    
    }, [beaconMqtt])

    return (

        <View style={styles.containerDriving}>
            
            <Battery />

            <View style={styles.containerTop}>

                <TurningLight 
                    beaconState = { beacon }
                    lightLeftState = { lightLeft }
                    iconOn = 'arrow-undo'
                    iconOff = 'arrow-undo-outline'
                    colorOff = 'white'
                    colorOn = 'green'
                    size={100}
                />
                
                <Speedometer />

                <TurningLight 
                    beaconState = { beacon }
                    lightLeftState = { lightRight }
                    iconOn = 'arrow-redo'
                    iconOff = 'arrow-redo-outline'
                    colorOff = 'white'
                    colorOn = 'green'
                    size={100}
                />

            </View>

            <Horn 
                hornState = { horn }
                iconOn = 'megaphone'
                iconOff = 'megaphone-outline'
                colorOff = 'red'
                colorOn = 'red'
                size={100}
                style={styles.horn}
            />

            <PositionLight 
                style={styles.positionLight}
                state = { carOn}
            />
    
            <LightScreen />

        </View>

    
    )
}

const styles = StyleSheet.create({
    containerDriving: {
        alignItems: 'center',
        marginTop: 30,
        flex: 1
    },
    containerTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    horn: {
        marginBottom: 30
    },
    positionLight: {
        width: 100,
        height: 100
    }

})
