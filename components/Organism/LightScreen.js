import React from 'react'
import { View,StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { LightItem } from '../Atoms/LightItem'

export const LightScreen = () => {

    const { lights } = useSelector(state => state.lights);

    const renderItem = ({ item }) => (
        <LightItem 
            item={ item }
        />
    )

    return (

        <SafeAreaView style={styles.vista}>

            <View style={styles.containerLights}>

                <FlatList 
                    data={ lights }
                    numColumns = {2}
                    renderItem = {renderItem}
                    keyExtractor= {item => item.id}   
                />
            </View>

        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    vista: {
      backgroundColor: 'black',
      flex: 1
    },
    containerLights: {
        flexDirection: 'row', 
        flexWrap: 'wrap'
    }
})
