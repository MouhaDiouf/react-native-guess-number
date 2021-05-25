import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import Header from './components/Header'
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess The Number' />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
   flex: 1
 }
});
