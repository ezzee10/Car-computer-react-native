import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native'
import { switchStateLight } from '../../actions/lights';

export const LightItem = ({ item }) => {

    const { title, active } = item;

    const dispatch = useDispatch();

    const toggleSwitch = () => {

    
    //    mqttPublish('asdasd');

       dispatch( switchStateLight( item, active ) );

        // const light = {
        //     ...item,
        //     active: !active
        // }

        

    }

    return (

    
        <View style={styles.containItem}>

            <Text style={styles.title}>{ title }</Text>
            
            <View style={[styles.itemColor, !active ? styles.colorInvalid : styles.colorValid ]}> 
                
            </View>

            <ToggleSwitch 

                onColor="green"
                offColor="gray"
                size = "large"
                isOn={active}
                onToggle={ toggleSwitch }
                style={styles.toggle}
            />
            
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
    }
    

})
