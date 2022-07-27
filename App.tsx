import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';

const arrayData = new Array (50)
.fill(null)
.map((_, index) => ({
  id: index + 1,
  title: `Titlt  ${index + 1}`
}))

export default function App() {
  
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <Text>123123</Text>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
 
});
