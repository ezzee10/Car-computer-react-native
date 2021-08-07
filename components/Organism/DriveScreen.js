import React, { useEffect, useState} from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Speedometer } from '../Molecules/Speedometer'
import { Battery } from '../Molecules/Battery'
import { LightScreen } from './LightScreen'
import { TurningLight } from '../Molecules/TurningLight'
import { Horn } from '../Molecules/Horn'
import { PositionLight } from '../Molecules/PositionLight'
import { useDispatch, useSelector } from 'react-redux'
import { Odometer } from '../Molecules/Odometer'
import AwesomeAlert from 'react-native-awesome-alerts';
import { changeShowSeltBelt } from '../../actions/stateCar'

export const DriveScreen = () => {

    const [lightRight, setLightRight] = useState(false);

    const [lightLeft, setLightLeft] = useState(false);

    const [beacon, setBeacon ] = useState(false); 

    const dispatch = useDispatch();

    const { active, odometer, odometer2, velocity, battery, seatBeltMessage, showAlertSeat } = useSelector(state => state.carStatus);

    const beaconRedux = useSelector(state => state.lights.lights[1].active); 

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

        <ScrollView style={styles.containerDriving}>

            <AwesomeAlert
                show={showAlertSeat}
                title="Alerta"
                message={seatBeltMessage}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Aceptar"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    dispatch(changeShowSeltBelt(false));
                }}
            />

            <View>
                <Battery 
                    levelBattery={battery}
                />
            </View>

            <Odometer 
                kmsT={odometer}
                kmsP={odometer2}
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

            <View style={{flexDirection: 'row', marginBottom: '1%', marginTop: '1%', justifyContent: 'center'}}>

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

        </ScrollView>

    
    )
}

const styles = StyleSheet.create({
    scroll: {
        marginTop: 30,
        flex: 1
    },
    containerDriving: {
        marginTop: 30,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    containerTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        marginBottom: '3%'
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
