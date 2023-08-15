import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';

export function Toggle() {
  const positionButton = useRef(new Animated.Value(0)).current;

  const [isOn, setIsOn] = useState(false);

  const startAnimToOff = () => {
    Animated.timing(positionButton, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  const startAnimToOn = () => {
    Animated.timing(positionButton, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  const positionInterPol = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const backgroundColorAnim = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: ['#F0D6B7', '#434343'],
  });

  const onPress = () => {
    if (isOn) {
      startAnimToOff();
      setIsOn(false);
    } else {
      startAnimToOn();
      setIsOn(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={{height: 30, width: 60}}
          activeOpacity={0.9}
          onPress={onPress}>
          <Animated.View
            style={[
              styles.mainStyes,
              {
                backgroundColor: backgroundColorAnim,
              },
            ]}>
            <Animated.View
              style={[
                styles.basicStyle,
                {
                  transform: [
                    {
                      translateX: positionInterPol,
                    },
                  ],
                },
              ]}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Dark Mode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    marginTop: 60,
    color: '#434343',
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 10,
  },
  basicStyle: {
    height: 23,
    width: 23,
    borderRadius: 20,
    backgroundColor: '#FFF',
    marginTop: 3,
    marginLeft: 4,
  },
  eahcStyles: {
    fontSize: 14,
    color: '#f5dd4b',
    position: 'absolute',
    top: 6,
    left: 5,
  },

  eahcStylesOf: {
    fontSize: 14,
    color: '#f4f3f4',
    position: 'absolute',
    top: 6,
    right: 5,
  },
  mainStyes: {
    borderRadius: 30,
    backgroundColor: '#81b0ff',
    height: 30,
    width: 60,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
