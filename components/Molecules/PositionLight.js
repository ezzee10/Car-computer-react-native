import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types';

export const PositionLight = ( {state, style }) => {

    let img = state ? require('../../assets/images/dashboard/image3-on.png') : require('../../assets/images/dashboard/image3.png');

    return (
        <Image style={style} source={img} />
    )
}


PositionLight.propTypes = {
   state: PropTypes.bool
};

PositionLight.defaultProps = {
    style: ''
};