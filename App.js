import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItems } from './Atoms/ListItems';

const App = () => {

  return (
    <View style={styles.vista}>
    
    <ListItems/>

    </View>
  );
};

const styles = StyleSheet.create({
  vista: {
    backgroundColor: 'black'
  }
})

export default App;
