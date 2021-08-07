import * as Mqtt from 'react-native-native-mqtt';
import { switchLeftTurn, switchRigthTurn } from '../actions/lights';
import { changeBattery, changeSeltBelt, changeSpeedometer, changeStateOdometer } from '../actions/stateCar';
import { store } from '../store/store';

global.Buffer = global.Buffer || require('buffer').Buffer

export const getMqtt = () => {

    const mqttClient = new Mqtt.Client('wss://zc482089.en.emqx.cloud:8084/mqtt');
   
    mqttClient.connect({
        clientId: `${'asd@gmail.com' + Math.random()}  `,
        username: 'vehiculo123',
        password: 'emqxd123',
        timeout: 500,
    }, err => {err});

    mqttClient.on(Mqtt.Event.Message,(topic, message) => {

        console.log(topic);

        switch (topic) {
            case 'app/kilometraje':
                store.dispatch(changeStateOdometer(parseInt(message.toString())));
                break;
            case 'app/velocidad':
                store.dispatch(changeSpeedometer(parseInt(message.toString())));
                break;
            case 'esp/bateria':
                store.dispatch(changeBattery(parseInt(message.toString())));
                break;
            case 'app/giroIzquierdo':
                store.dispatch(switchLeftTurn(parseInt(message.toString())));
                break;
            case 'app/giroDerecho':
                store.dispatch(switchRigthTurn(parseInt(message.toString())));
                break;
            case 'app/alerta':
                store.dispatch(changeSeltBelt(message.toString()));
            default:
                break;
        }
    });
    
    mqttClient.on(Mqtt.Event.Connect, () => {
        console.log('MQTT Connect');
        mqttClient.subscribe(['esp/bocina'], [0])
        mqttClient.subscribe(['esp/luces/baja'], [0])
        mqttClient.subscribe(['esp/luces/baliza'], [0])
        mqttClient.subscribe(['app/velocidad'], [0])
        mqttClient.subscribe(['app/kilometraje'], [0])
        mqttClient.subscribe(['esp/bateria'], [0])
        mqttClient.subscribe(['app/giroIzquierdo'], [0])
        mqttClient.subscribe(['app/giroDerecho'], [0])
        mqttClient.subscribe(['app/alerta'], [0])
        // const Buffer = require("buffer").Buffer;
        // mqttClient.publish('esp/led', Buffer.from("Probando aplicacion", "utf8") , 0, false);

        // store.dispatch(connectionMqtt(mqttClient));
    });
    
    mqttClient.on(Mqtt.Event.Error, (error) => {
        console.log('MQTT Error:', error);
    });

    return mqttClient;

  }
  

 

  




