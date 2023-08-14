import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';

export function Intro() {
  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={require('../assets/images/TvMain.png')}
        style={styles.tvImageStyle}
      />
      <Image
        source={require('../assets/images/RetroDetail.png')}
        style={styles.retroImageStyle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
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
