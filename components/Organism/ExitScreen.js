import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
  } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const ExitScreen = () => {

    const navigation = useNavigation();

    const clearSession = async () => {
        await AsyncStorage.removeItem('user-token')
        navigation.navigate('Login');
    }

    return (
        <View style={styles.containerExit}>
            <TouchableHighlight 
            style ={styles.button}
            onPress={() => clearSession()}
        >
            <Text style={styles.appButtonText}> Cerrar sesión </Text>

        </TouchableHighlight> 
      </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        width: '40%',
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
    containerExit: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }

})
