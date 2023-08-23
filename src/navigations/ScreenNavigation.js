import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from '../screens/Home';
import Location from '../screens/Location';
import Profile from '../screens/Profile';
import NavBottomBar from './NavBottomBar';
import SplashScreen from '../screens/SplashScreen';
import Account from '../screens/Account';

const Stack = createNativeStackNavigator();

export default function ScreenNavigation() {
  return (
    <Stack.Navigator
      // initialRouteName="SplashScreen"
      initialRouteName="HomeBottomBar"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeBottomBar"
        component={NavBottomBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});
