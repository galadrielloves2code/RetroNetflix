/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={require('./assets/images/TvMain.png')}
        style={styles.tvImageStyle}
      />
      <Image
        source={require('./assets/images/RetroDetail.png')}
        style={styles.retroImageStyle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F0D6B7',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  tvImageStyle: {
    marginTop: 174,
    zIndex: 1,
    width: 525.975,
    height: 360.021,
  },
  retroImageStyle: {
    bottom: 70,
  },
});

export default App;
