import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { restartOdometer2 } from '../../actions/stateCar'

export const Odometer = ({ kmsT, kmsP }) => {

    const dispatch = useDispatch()
    
    const restartKms = () => {
        dispatch(restartOdometer2());
        console.log('llego aca?')
    }
    
    return (
        <View style={styles.container}>

            <View style={{marginRight: '10%'}}>
                <Text style={{color: 'yellow', fontSize: 25}}>Kms Totales</Text>
                <Text style={{color: 'yellow', fontSize: 25, textAlign:'center'}}>{kmsT} km</Text>
            </View>

            <View >
                <Text style={{color: 'yellow', fontSize: 25}}>Kms Parciales</Text>
                <Text style={{color: 'yellow', fontSize: 25, textAlign: 'center'}}>{kmsP} km</Text>
                <TouchableHighlight 
                    style ={styles.button}
                    onPress={() => restartKms()}
                >
                    <Text style={styles.appButtonText}> Reiniciar </Text>

                </TouchableHighlight> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        height: 50,
        borderRadius: 4,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'gray',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 8
    },
    appButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        textTransform: 'uppercase'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
