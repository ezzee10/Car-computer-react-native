// import React, { useState, useEffect } from 'react';
// import { myqtt } from '../mqtt/Mqtt';
// import myqttContext from './myqttContext';

// const MyqttState = props => {

//     const [client, setClient] = useState(null);

//     useEffect(() => {
//         setClient( myqtt );
//     }, [myqtt])

//     const mqttPublish = (context) => {

//         console.log(context);

//         console.log(client)

//         if (client) {

//           const { topic, payload } = context;

//           //client.publish('esp/32', 'asd');

//         }
//     }


//     return (
//         <myqttContext.Provider
//             value={{
//                 client,
//                 setClient,
//                 mqttPublish
//             }}
//             >{props.children}
//         </myqttContext.Provider>
//     )
// }

// export default MyqttState;