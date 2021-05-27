import React from 'react'
import * as Mqtt from 'react-native-native-mqtt';
import { switchStateCar } from '../actions/stateCar';
global.Buffer = global.Buffer || require('buffer').Buffer

export const getMqtt = () => {

    const mqttClient = new Mqtt.Client('wss://zc482089.en.emqx.cloud:8084/mqtt');
   
    mqttClient.connect({
        clientId: 'asd@gmail.com',
        username: 'vehiculo123',
        password: 'emqxd123',
        timeout: 500,
    }, err => {err});
    
    mqttClient.on(Mqtt.Event.Message,(topic, message) => {

        let msg = message.toString();

        switch (topic) {
            case 'esp/contacto':
                switchStateCar(msg);
                console.log('Llego aca?');
                break;
        
            default:
                break;
        }
        console.log(topic, message.toString());
    });
    
    mqttClient.on(Mqtt.Event.Connect, () => {
        console.log('MQTT Connect');
        mqttClient.subscribe(['user/register'], [0])
        mqttClient.subscribe(['esp/contacto'], [0])
        mqttClient.subscribe(['esp/bocina'], [0])
        mqttClient.subscribe(['esp/luces/baja'], [0])
        // const Buffer = require("buffer").Buffer;
        // mqttClient.publish('esp/led', Buffer.from("Probando aplicacion", "utf8") , 0, false);
    });
    
    mqttClient.on(Mqtt.Event.Error, (error) => {
        console.log('MQTT Error:', error);
    });

    return mqttClient;

  }
  

 

  




