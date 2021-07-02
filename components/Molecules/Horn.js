import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Pressable, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


export const Horn = ({ hornState , iconOn, iconOff, colorOff, colorOn, size, style }) => {

    const [pressed, setPressed] = useState(0);

    let { mqtt } = useSelector(state => state.mqtt);

    const onHorn = ( state ) => {
        
        setPressed( state );
        mqtt.publish('esp/bocina', Buffer.from(JSON.stringify(state), "utf8"))
    }
    return (
        <Pressable onPressIn={() => onHorn(true)} onPressOut={() => onHorn(false)} style={style}>
            <Icon style={styles.icon} name={`${ hornState || pressed ? iconOn : iconOff }`} size={size} color={`${ hornState || pressed ? colorOn : colorOff}`} />   
        </Pressable>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginLeft: 30,
        marginRight: 30
    }
})

Horn.propTypes = {
    hornState: PropTypes.bool,
    iconOn: PropTypes.string,
    iconOff: PropTypes.string,
    colorOff: PropTypes.string,
    colorOn: PropTypes.string,
    size: PropTypes.number
};

Horn.defaultProps = {
    style: ''
  };