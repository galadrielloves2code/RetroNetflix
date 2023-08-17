/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Home} from './pages/home';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <Home/>
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
