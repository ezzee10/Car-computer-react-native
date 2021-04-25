import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ListItems } from '../Atoms/ListItems';

export const HomeScreen = () => {
    return (
        <View style={styles.vista}>
        
            <ListItems/>
  
        </View>
  
    )
}

const styles = StyleSheet.create({
    vista: {
      backgroundColor: 'black',
      flex: 1
    }
})
