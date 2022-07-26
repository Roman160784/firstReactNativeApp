import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';

export default function App() {
  
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>

      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => {Keyboard.dismiss()}}>
      <View>

      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Push' onPress={() => {Alert.alert(value)}}/>
      <ActivityIndicator size="large" color="tomato" />
      <Image style={styles.image} source={{uri: 'https://www.adictosaltrabajo.com/wp-content/uploads/2020/10/ReactBackground.png'}}/>

      <TextInput style={styles.input}
       placeholder={'Email'} 
       value={value} 
       onChangeText={setValue}/>

      
      </View>

      </TouchableWithoutFeedback>

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
  },
  input: {
    width: 200,
    height: 50,
    backgroundColor: 'orange'
  }
});
