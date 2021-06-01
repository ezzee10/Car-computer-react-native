import React from 'react'
import { View, StyleSheet, Image, FlatList, Text, TouchableHighlight} from 'react-native';
import {entries} from '../../Mocks/Entries';
import { Entry } from '../Atoms/Entry';
import Icon from 'react-native-vector-icons/FontAwesome'
import { switchStateCar } from '../../actions/stateCar';
import { useDispatch, useSelector } from 'react-redux';


export const HomeScreen = () => {

    const renderItem = ({item}) => (
        <Entry title={item.title} subtitle={item.subtitle} iconName={item.icon}/>
    )

    const dispatch = useDispatch();

    let { mqtt } = useSelector(state => state.mqtt);

    let { active } = useSelector(state => state.carStatus);

    let asd = useSelector(state => state.carStatus);
    
    const handleStartCar = () => {

        mqtt.publish('esp/contacto', Buffer.from(JSON.stringify(!active), "utf8"))
        dispatch(switchStateCar(!active))
        
    }

   
    return (

        <View style={styles.vista}>

            <Image 
                source={require('../../assets/images/car6.png')} 
                style={styles.image}>            
            </Image> 

            <View style={styles.power}>
                <TouchableHighlight onPress={handleStartCar}>
                    <Icon style={styles.icon} name="power-off" size={100} color={active ? 'green' : 'red'} />
                </TouchableHighlight>
                <Text style={styles.text}>{active ? 'Apagar vehículo': 'Encender vehículo'}</Text>
            </View>

            <View style={styles.list}>
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
    icon: {
        textAlign: 'center'
    },
    power: {
        justifyContent:'center',
        position: 'relative',
        top: -30
    },
    text: {
        color:'white',
        textAlign: 'center',
        fontSize: 18
    },
    list: {
        flex: 1
    }
})
