import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import image  from './assets/diamante-negro.png';

const App = () => {
  return (
  <View style={styles.container}>
  <Text style={styles.title}> DIAMONDS </Text>
  <Image 
  source={image}
  style ={styles.image}
  />
  <TouchableOpacity
  onPress={() => Alert.alert('Hola!')}
  style = {styles.button}>
    <Text style = {styles.buttonText}> Press Me</Text>
  </TouchableOpacity>
  </View>);
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  title: { fontSize: 30, color:'white' },
  image: {height: 300, width: 300},
  button: {backgroundColor: 'blue', padding: 7, marginTop: 7},
  buttonText: {color: '#fff', fontSize: 20}
});

export default App;