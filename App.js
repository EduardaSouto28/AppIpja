import Home from './src/pages/Home'
import React from 'react';
import Header from './src/components/Header';
import { 
  View, 
  StyleSheet, 
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F',
  },
});
