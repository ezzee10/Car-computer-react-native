import React from 'react';
import { Icon } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export const Entry = ({title, subtitle, iconName}) => {
  return (
      <View style={styles.entry}>
        <Icon style={styles.iconLeft} name={iconName}/>
        <View style={styles.containerInfo}>
          <Text style={styles.entryName}>{title}</Text>
          { subtitle ? <Text style={styles.entrySubtitle}>{subtitle}</Text> : null }
        </View>
        <Icon name={'chevron-up'} style={styles.iconRight}/> 
      </View>
  );
};

const styles = StyleSheet.create({
  entry: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  iconRight: {
    flex: 1,
    textAlign: 'right',
    color: '#ccc'
  },
  iconLeft: {
    color: '#fff'
  },
  entryName: {
    textTransform: 'uppercase',
    fontSize: 16,
    alignItems: 'center',
    color: '#FFF'
  },
  entrySubtitle: {
    color: '#CCC'
  },
  containerInfo: {
    paddingLeft: 30,
    justifyContent: 'center'
  }
  
})
