import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, FlatList, Button, Alert, Text } from 'react-native';
import {entries} from '../../Mocks/Entries';
import { Entry } from '../Atoms/Entry';
// import * as Mqtt from 'react-native-native-mqtt';
// global.Buffer = global.Buffer || require('buffer').Buffer

export const HomeScreen = () => {

    const renderItem = ({item}) => (
        <Entry title={item.title} subtitle={item.subtitle} iconName={item.icon}/>
    )


//   const [topic, setTopic] = useState('PROBANDO TOPICO');
//   const [client, setClient] = useState(null);

//   const myqtt = new Mqtt.Client('wss://zc482089.en.emqx.cloud:8084/mqtt');
   
//   myqtt.connect({
//       clientId: 'ezequiel.colombano@gmail.com',
//       username: 'vehiculo123',
//       password: 'emqxd123',
//       timeout: 500
//   }, err => {});

//   useEffect(() => {
//     if (client) {

//         myqtt.on(Mqtt.Event.Message, (topic, message) => {
//             console.log('Mqtt Message:', topic, message.toString());
//             setTopic( Buffer.from(message, "base64").toString() );
//         });
      
//         myqtt.on(Mqtt.Event.Connect, () => {
//             myqtt.subscribe(['/topic1'], [0]);
//         });
         
//         myqtt.on(Mqtt.Event.Error, (error) => {
//             console.log('MQTT Error:', error);
//         });
      
//     }
//   }, [myqtt]);
   
    return (

        <View style={styles.vista}>

             <Image 
                source={require('../../assets/images/car6.png')} 
                style={styles.image}>            
            </Image> 

            {/* <Text style={{ color: 'white' }}>{ topic }</Text> */}

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
    }
})
