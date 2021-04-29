import { View, StyleSheet, Text } from 'react-native'
import React, {useState} from 'react'
import ToggleSwitch from 'toggle-switch-react-native'

export const LightItem = ({ title, color }) => {

    const [lightState, setLightState] = useState(false);

    return (

        <View style={ styles.containerItem }>
    
            <View style={styles.containItem}>

                <Text style={styles.title}>{ title }</Text>
                
                <View style={[styles.itemColor, lightState ? styles.colorValid : styles.colorInvalid]}> 
                    
                </View>

                <ToggleSwitch 

                    onColor="green"
                    offColor="gray"
                    size = "large"
                    isOn={lightState}
                    onToggle={() => setLightState(!lightState)}
                    style={styles.toggle}
                />
                
            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    containerItem: {
        flexDirection: 'row',   
        width: '50%',
        justifyContent: 'center',
        height: 'auto',
        marginBottom: 30
    },
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
        width: '100%',
        alignItems: 'center',
    },
    toggle: {
        marginTop: 15,
    }
    

})
