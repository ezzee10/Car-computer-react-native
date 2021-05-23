import React from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native'
import { switchStateLight } from '../../actions/lights';

export const LightItem = ({ item }) => {

    const { title, active, image, imageOn } = item;

    let img = active ? imageOn : image;

    console.log(active)

    const dispatch = useDispatch();

    const { mqtt }  = useSelector(state => state.mqtt.mqtt)

    const toggleSwitch = () => {

       dispatch(switchStateLight( item, active ));
    }

    return (

    
        <View style={styles.containItem}>

            <Text style={styles.title}>{ title }</Text>
            
            {/* <View style={[styles.itemColor, !active ? styles.colorInvalid : styles.colorValid ]}> 
                
            </View> */}
            <TouchableHighlight
                onPress={toggleSwitch}
            >
                <Image style={styles.img} source={img} />

            </TouchableHighlight>
            

            {/* <ToggleSwitch 

                onColor="green"
                offColor="gray"
                size = "large"
                isOn={active}
                onToggle={ toggleSwitch }
                style={styles.toggle}
            /> */}
            
        </View>

    )
}

const styles = StyleSheet.create({

    itemColor: {
        flexDirection: 'row',
        padding: 50,
        borderRadius: 50
    },
    colorValid: {
        backgroundColor: 'yellow'
    },
    colorInvalid: {
        backgroundColor: 'gray'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
        lineHeight: 20
    },
    containItem: {
        width: '25%',
        alignItems: 'center',
        marginBottom: 35
    },
    toggle: {
        marginTop: 15,
    },
    img: {
        width: 100,
        height: 100,
    }
    

})
