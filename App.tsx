/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CategoryPage} from './pages/category';
import {SeriesPage} from './pages/series';
import {Home} from './pages/home';
import {FilmPage} from './pages/film';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Series" component={SeriesPage} />
          <Stack.Screen name="Film" component={FilmPage} />
          <Stack.Screen name="Series" component={CategoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
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
