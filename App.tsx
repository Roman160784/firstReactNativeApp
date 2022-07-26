import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Push' onPress={() => {Alert.alert('TTT')}}/>
      <ActivityIndicator size="large" color="tomato" />
      <Image style={styles.image} source={{uri: 'https://www.adictosaltrabajo.com/wp-content/uploads/2020/10/ReactBackground.png'}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  }
});
