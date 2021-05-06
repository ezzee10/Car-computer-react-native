import React, {useEffect, useState } from 'react';
import mqtt from 'mqtt';


export const Mqtt = () => {

const [client, setClient] = useState(null);
const [isSubed, setIsSub] = useState(false);
const [payload, setPayload] = useState({});
const [connectStatus, setConnectStatus] = useState('Connect');

const options = {
    //   host: 'node02.myqtthub.com',
      clientId: 'lucas.capponi@gmail.com',
    //   port: 1883,
      username: 'lucas_vehiculo',
      password: 'vehiculo',
      autoReconnect: true
};

const url = `ws://${host}:${port}/mqtt`;

const mqttConnect = (host, mqttOption) => {
    setConnectStatus('Connecting');
    setClient(mqtt.connect(host, mqttOption));
};

useEffect(() => {

    console.log('Llego por acá')

    mqttConnect(`ws://node02.myqtthub.com:1883/mqtt`, options)

    if (client) {

    console.log(client)

    client.on('connect', () => {
        setConnectStatus('Connected');
    });

    client.on('error', (err) => {
        console.error('Connection error: ', err);
        client.end();
    });

    client.on('reconnect', () => {
        setConnectStatus('Reconnecting');
    });

    client.on('message', (topic, message) => {
        const payload = { topic, message: message.toString() };
        setPayload(payload);
    });

}}, [client]);

const mqttDisconnect = () => {
    if (client) {
      client.end(() => {
        setConnectStatus('Connect');
      });
    }
  }

  const mqttPublish = () => {
    if (client) {
      const { topic, qos, payload } = context;
      client.publish('testtopic/react', 'testeando', 0 , error => {
        if (error) {
          console.log('Publish error: ', error);
        }
      });
    }
  }

  const mqttSub = (subscription) => {
    if (client) {
      const { topic, qos } = subscription;
      client.subscribe(topic, { qos }, (error) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        setIsSub(true)
      });
    }
  };

  const mqttUnSub = (subscription) => {
    if (client) {
      const { topic } = subscription;
      client.unsubscribe(topic, error => {
        if (error) {
          console.log('Unsubscribe error', error)
          return
        }
        setIsSub(false);
      });
    }
  };

  

    return (
        <>     
        </>
    )
}



