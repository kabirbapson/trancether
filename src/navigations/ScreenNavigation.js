import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import SplashScreen from '../screens/SplashScreen';
import AccountSetup from '../screens/AccountSetup';
import Messages from '../screens/Dashboard/Messages';
import Home from '../screens/Dashboard/Home';
import Profile from '../screens/Dashboard/Profile';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function ScreenNavigation() {
  return (
    <Stack.Navigator
      // initialRouteName="SplashScreen"
      initialRouteName="Dashboard"
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
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountSetup"
        component={AccountSetup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});
