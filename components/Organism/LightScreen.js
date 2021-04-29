import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { LightItem } from '../Atoms/LightItem'
import { lights } from '../../Mocks/LightsInfo'

export const LightScreen = () => {

    const renderItem = ({item}) => (
        <LightItem title={item.title} />
    )

    return (

        <SafeAreaView style={styles.vista}>

            <Text>{'hola hola!'}</Text>

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
