import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { ListItems } from '../Atoms/ListItems';

export const HomeScreen = () => {


    return (

        <View style={styles.vista}>
            <Image source={require('../../assets/images/car6.png')} style={styles.image}></Image>
            <ListItems/>
        </View>
  
    )
}

const styles = StyleSheet.create({
    vista: {
      backgroundColor: 'black',
      flex: 1,
      marginBottom: 10
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        backgroundColor: 'black',
        justifyContent: 'center',
        width: '100%'
    },
})
