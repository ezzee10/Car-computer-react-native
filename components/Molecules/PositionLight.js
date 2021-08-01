import React from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types';

export const PositionLight = ( {state, style }) => {

    let img = state ? require('../../assets/images/dashboard/image3-on.png') : require('../../assets/images/dashboard/image3.png');

    return (
        <View>
            <Text style={styles.title}>Luz de posición</Text>
            <Image style={style} source={img} />
        </View>
    )
}

PositionLight.propTypes = {
    state: PropTypes.bool
 };
 
 PositionLight.defaultProps = {
     style: ''
 };

const styles = StyleSheet.create({
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
})

