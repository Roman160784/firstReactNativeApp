import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View, Image, TextInput, 
  TouchableWithoutFeedback, TouchableOpacity, Keyboard, FlatList } from 'react-native';

const arrayData = new Array (100)
.fill(null)
.map((_, index) => ({
  id: index + 1,
  title: `Title ${index + 1}`
}))

export default function App() {
  
  const renderItem = useCallback(({item}) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  ), [])
  const keyExtractor = useCallback((item, index) => `${item.title}.${index}`, [])


  return (
    <View style={styles.container}>
      <Text>123123</Text>
      <FlatList 
      data={arrayData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      />
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
