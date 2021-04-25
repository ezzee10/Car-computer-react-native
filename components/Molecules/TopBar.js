import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'native-base';

export const TopBar = ({title, icon}) => {
    return (
        <View style={styles.entry}>
            <Icon style={styles.icon} name={icon}></Icon>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    entry: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 16,
        alignItems: 'center',
        color: '#FFF',
        flex: 1,
        textAlign: 'center'
    },
    icon: {
        color: '#fff'
    }
})