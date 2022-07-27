import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator, Alert, Button, StyleSheet, Text, View, Image, TextInput,
  TouchableWithoutFeedback, TouchableOpacity, Keyboard, FlatList, ListRenderItem, Dimensions
} from 'react-native';


type ArrayDataType = {
  id: number
  title: string
  count: number
}

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height

const arrayData: ArrayDataType[] = new Array(100)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: `Title ${index + 1}`,
    count: (index + 1) * 5
  }))

export default function App() {

  const renderItem: ListRenderItem<ArrayDataType> = useCallback(({ item, index }) => (
    <View style={[styles.item, {backgroundColor: index % 2? 'tomato' : 'orange'}]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{`${item.count}$`}</Text>
    </View>
  ), [])

  const keyExtractor = useCallback((item, index) => `${item.title}.${index}`, [])


  return (
    <View style={styles.container}>

      <FlatList
        data={arrayData}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  item: {
    width: (WIDTH - 20 * 2) /2-5,
    height: (WIDTH - 20 * 2) /2-5,
    marginVertical: 5,
    backgroundColor: 'orange'
  },
  title: {
    fontSize: 20,
    
  },
  price: {
    color: 'green',
    backgroundColor: 'gold'
  }
});
