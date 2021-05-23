import * as Mqtt from 'react-native-native-mqtt';
global.Buffer = global.Buffer || require('buffer').Buffer

export const getMqtt = () => {

    // const mqttClient = new Mqtt.Client('wss://zc482089.en.emqx.cloud:8084/mqtt');
   
    // mqttClient.connect({
    //     clientId: 'ezequiel.colombano@gmail.com',
    //     username: 'vehiculo123',
    //     password: 'emqxd123',
    //     timeout: 500,
    // }, err => {err});
    
    // mqttClient.on(Mqtt.Event.Message, (topic, message) => {
    //     let d = new Date();
    //     console.log('Mqtt Message:', topic, message.toString() + '' + d.toString() + ':'+ d.getMilliseconds());
    // });
    
    // mqttClient.on(Mqtt.Event.Connect, () => {
    //     console.log('MQTT Connect');
    //     mqttClient.subscribe(['/topic1'], [0]);
    //     mqttClient.subscribe(['/topic2'], [0]);
    //     mqttClient.subscribe(['esp/led'], [0]);
    //     const Buffer = require("buffer").Buffer;
    //     mqttClient.publish('esp/led', Buffer.from("Probando aplicacion", "utf8") , 0, false);
    // });
    
    // mqttClient.on(Mqtt.Event.Error, (error) => {
    //     console.log('MQTT Error:', error);
    // });

    return null;

  }
  

 

  




