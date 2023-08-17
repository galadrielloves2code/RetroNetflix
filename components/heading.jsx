import React from 'react';
import {SafeAreaView, Image, StyleSheet, Text} from 'react-native';

export function Heading() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>SERIES</Text>
      <Text style={styles.text}>FILM</Text>
      <Text style={styles.text}>CATEGORY</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },

  logo: {
    height: 56,
    width: 32,
  },
  text:{
    fontWeight:'bold',
  }
});
