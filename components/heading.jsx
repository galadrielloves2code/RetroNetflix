import React from 'react';
import {SafeAreaView, Image, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function Heading() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Button onPress={() => navigation.navigate('Series')}>SERIES</Button>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
  },

  logo: {
    height: 56,
    width: 32,
  },
});
