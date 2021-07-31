import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import { clienteAxios } from '../../config/config'

export const InfoScreen = () => {

    const {name, surname, email, travel} = useSelector(state => state.user)
    const {odometer: kms} = useSelector(state => state.carStatus)
    const {note} = useSelector(state => state.note);

    const sendInfo = async () => {
        let info = {
            name,
            surname,
            email,
            travel,
            kms,
            note
        }

        console.log(info);

        await clienteAxios.post('/api/email', info);
    }
    
    

    return (
        <View style={styles.contenedor}>

                <View>
                    <Text style={styles.text}>{`Nombre/s: ${name}`}</Text>
                    <Text style={styles.text}>{`Apellido/s: ${surname}`}</Text>
                    <Text style={styles.text}>{`Email: ${email}`}</Text>
                    <Text style={styles.text}>{`Kilómetros totales: ${kms}`}</Text>
                    <Text style={styles.send}> Enviar toda la información vía mail</Text>

                    <TouchableHighlight 
                        style ={styles.button}
                        onPress={() => sendInfo()}
                    >
                    <Text style={styles.appButtonText}> Enviar información </Text>

                    </TouchableHighlight> 
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    contenedor: {
        flexDirection: 'row',
        justifyContent:'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginBottom: 30
    },
    button: {
        backgroundColor: 'black',
        width: '80%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'gray',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 40
    },
    appButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        position: 'relative',
        top: -2,
        textTransform: 'uppercase'
      },
      send: {
          marginTop: 20,
          marginBottom: 20,
          fontSize: 25,
          color: 'yellow'
      }
})
