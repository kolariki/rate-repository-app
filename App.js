import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import image from './assets/diamante2.png';

const App = () => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.title}> DIAMONDS </Text>
      <Image
        source={image}
      />
    </View>);
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#292929' },
  title: { fontSize: 30, color: 'white' },
  image: { height: 10, width: 10}
});

export default App;