import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet} from 'react-native'


export const TurningLight = ({ beaconState , lightState, iconOn, iconOff, colorOff, colorOn, size }) => {
    return (
        <Icon style={styles.icon} name={`${beaconState || lightState ? iconOn : iconOff }`} size={size} color={`${beaconState || lightState ? colorOn : colorOff}`} />   
    )
}

const styles = StyleSheet.create({
    icon: {
        marginLeft: 30,
        marginRight: 30
    }
})
