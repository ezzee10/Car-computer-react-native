import React from 'react'
import { View, StyleSheet, Image, FlatList } from 'react-native';
import {entries} from '../../Mocks/Entries';
import { Entry } from '../Atoms/Entry';

export const HomeScreen = () => {

    const renderItem = ({item}) => (
        <Entry title={item.title} subtitle={item.subtitle} iconName={item.icon}/>
    )

    return (

        <View style={styles.vista}>
            <Image source={require('../../assets/images/car6.png')} style={styles.image}></Image>
            <View>
                <FlatList
                    data={ entries }
                    renderItem = {renderItem}
                    keyExtractor= {item => item.id}
                />
            </View>
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
