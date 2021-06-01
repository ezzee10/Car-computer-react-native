import React from 'react'
import * as Mqtt from 'react-native-native-mqtt';
import { changeSpeedometer, switchStateCar } from '../actions/stateCar';

global.Buffer = global.Buffer || require('buffer').Buffer

export const getMqtt = (store) => {

    const mqttClient = new Mqtt.Client('wss://zc482089.en.emqx.cloud:8084/mqtt');
   
    mqttClient.connect({
        clientId: 'asd@gmail.com',
        username: 'vehiculo123',
        password: 'emqxd123',
        timeout: 500,
    }, err => {err});

    console.log(store)
    
    mqttClient.on(Mqtt.Event.Message,(topic, message) => {

        console.log(topic, message);

        switch (topic) {
            // case 'esp/contacto':
            //     store.dispatch(switchStateCar(!!message));
            //     break;
            case 'esp/velocimetro':
                store.dispatch(changeSpeedometer(parseInt(message.toString())))
            default:
                break;
        }
    });
    
    mqttClient.on(Mqtt.Event.Connect, () => {
        console.log('MQTT Connect');
        mqttClient.subscribe(['user/register'], [0])
        mqttClient.subscribe(['esp/contacto'], [0])
        mqttClient.subscribe(['esp/bocina'], [0])
        mqttClient.subscribe(['esp/luces/baja'], [0])
        mqttClient.subscribe(['esp/velocimetro'], [0])
        // const Buffer = require("buffer").Buffer;
        // mqttClient.publish('esp/led', Buffer.from("Probando aplicacion", "utf8") , 0, false);
    });
    
    mqttClient.on(Mqtt.Event.Error, (error) => {
        console.log('MQTT Error:', error);
    });

    return mqttClient;

  }
  

 

  




