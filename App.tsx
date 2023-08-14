/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { LogIn } from './pages/logIn';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <LogIn/>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F0D6B7',
  },
});
