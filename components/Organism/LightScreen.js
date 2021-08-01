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
                numColumns={3}
                columnWrapperStyle={{ justifyContent: "space-around"}}
                contentContainerStyle={{
                marginTop:20 
                }}
                data={ lights }
                keyExtractor={item => item.id}
                renderItem={renderItem}
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
})
