import React, { useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Speedometer } from '../Molecules/Speedometer'
import { Battery } from '../Molecules/Battery'
import { LightScreen } from './LightScreen'
import { TurningLight } from '../Molecules/TurningLight'
import { Horn } from '../Molecules/Horn'
import { PositionLight } from '../Molecules/PositionLight'
import { useSelector } from 'react-redux'
import { Odometer } from '../Molecules/Odometer'

export const DriveScreen = () => {

    const [lightRight, setLightRight] = useState(false);

    const [lightLeft, setLightLeft] = useState(false);

    const [beacon, setBeacon ] = useState(false); 

    const { active, odometer, velocity, battery } = useSelector(state => state.carStatus);

    const beaconRedux = useSelector(state => state.lights.lights[4].active); 

    const lightLeftRedux = useSelector(state => state.lights.leftTurn);
    
    const lightRightRedux = useSelector(state => state.lights.rightTurn);

    useEffect(() => {

        if( beaconRedux) {
            setBeacon(beacon => !beacon);
            const interval2 = setInterval(() => {
                setBeacon(beacon => !beacon);
            }, 1000);
            return () => clearInterval(interval2);
        }else {
            setBeacon(false);
        }
    }, [beaconRedux]);

    useEffect(() => {

        if( lightRightRedux && !beaconRedux ) {
            setLightRight(lightRight => !lightRight);
            const interval = setInterval(() => {
                setLightRight(lightRight => !lightRight);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setLightRight(false);
        }
    }, [lightRightRedux, beaconRedux])

    useEffect(() => {

        if( lightLeftRedux && !beaconRedux ) {
            setLightLeft(lightLeft => !lightLeft);
            const interval = setInterval(() => {
                setLightLeft(lightLeft => !lightLeft);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setLightLeft(false);
        }
    }, [lightLeftRedux, beaconRedux])

    return (

        <View style={styles.containerDriving}>
            
            <Battery 
                levelBattery={battery}
            />

            <Odometer 
                kms={odometer}
            />
            
            <View style={styles.containerTop}>

                <TurningLight 
                    beaconState = { beacon }
                    lightState = { lightLeft }
                    iconOn = 'arrow-undo'
                    iconOff = 'arrow-undo-outline'
                    colorOff = 'white'
                    colorOn = 'green'
                    size={100}
                />
                
        
                <Speedometer 
                    velocity = {velocity}
                />

                <TurningLight 
                    beaconState = { beacon }
                    lightState = { lightRight }
                    iconOn = 'arrow-redo'
                    iconOff = 'arrow-redo-outline'
                    colorOff = 'white'
                    colorOn = 'green'
                    size={100}
                />

            </View>

            <View style={{flexDirection: 'row', marginBottom: 30, marginTop: 30}}>

                <Horn 
                    iconOn = 'megaphone'
                    iconOff = 'megaphone-outline'
                    colorOff = 'red'
                    colorOn = 'red'
                    size={100}
                    style={styles.horn}
                />

                <PositionLight 
                    style={styles.positionLight}
                    state = {active}
                />

            </View>
    
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
        marginBottom: 30,
        marginRight: 50
    },
    positionLight: {
        width: 100,
        height: 100
    }

})
