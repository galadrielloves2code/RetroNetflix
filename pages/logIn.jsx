import React from 'react';
import {StyleSheet, Text, Image, SafeAreaView, View} from 'react-native';

export function LogIn() {
  return (
    <SafeAreaView>
      <View style={styles.topBar}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.edit}>EDIT</Text>
      </View>
      <View>
        <Text style={styles.primaryFont}>WHO IS WATCHING?</Text>
      </View>
      <View style={styles.bottom}>
        <Image
          source={require('../assets/images/casette.png')}
          style={styles.img}
        />
        <Image
          source={require('../assets/images/RetroDetail.png')}
          style={styles.retroImageStyle}
        />
        <Text style={styles.add}>+ ADD</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  primaryFont: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
  },
  logo: {
    height: 56,
    width: 32,
    marginTop: 24,
    marginLeft: 24,
  },
  edit: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: 'red',
    marginRight: 24,
    marginTop: 30,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 362,
    height: 198,
    alignSelf: 'center',
    zIndex: 1,
  },
  retroImageStyle: {
    alignSelf: 'center',
    bottom: 40,
  },
  bottom: {
    position: 'relative',
  },
  add: {
    zIndex: 99,
    borderColor: 'black',
    top: 50,
    color: 'red',
    borderWidth: 2,
  },
});
