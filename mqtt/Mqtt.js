// import * as Mqtt from 'react-native-native-mqtt';

//   const myqtt = new Mqtt.Client('wss://zc482089.en.emqx.cloud:8084/mqtt');
   
//     myqtt.connect({
//         clientId: 'ezequiel.colombano@gmail.com',
//         username: 'vehiculo123',
//         password: 'emqxd123',
//         timeout: 500,
//     }, err => {});
    
//     myqtt.on(Mqtt.Event.Message, (topic, message) => {
//         console.log('Mqtt Message:', topic, message.toString());
//     });
    
//     myqtt.on(Mqtt.Event.Connect, () => {
//         console.log('MQTT Connect');
//         myqtt.subscribe('/topic1', 0);
//         myqtt.publish('/topic1', 'asdddssadsadsaasddasdasd', 0, false);
//     });
    
//     myqtt.on(Mqtt.Event.Error, (error) => {
//         console.log('MQTT Error:', error);
//     });
    
//     myqtt.on(Mqtt.Event.Disconnect, (cause) => {
//         console.log('MQTT Disconnect:', cause);
//     });

  

//   export default myqtt;



