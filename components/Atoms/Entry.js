import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Entry = ({title, subtitle, iconName}) => {

  const navigation = useNavigation();

  const renderNewScreen = ( screen ) => {

    navigation.navigate(screen.toLowerCase());

  }

  return (
      <View style={styles.entry}>
        <Icons style={styles.iconLeft} name={iconName} size={30}/>
        <View style={styles.containerInfo}>
          <Text style={styles.entryName}>{title}</Text>
          { subtitle ? <Text style={styles.entrySubtitle}>{subtitle}</Text> : null }
        </View>
        <Icons name={'arrow-forward-outline'} style={styles.iconRight} onPress={ ()=> renderNewScreen (title) }/> 
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
    color: '#ccc',
    fontSize: 30
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
