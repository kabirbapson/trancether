import React from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// screens
import Home from '../screens/Home';
import Location from '../screens/Location';
import Profile from '../screens/Profile';
import {Icon} from 'native-base';
import HomeActive from '../assets/images/HomeActive.svg';
import HomeInActive from '../assets/images/HomeInActive.svg';
import MessageInActive from '../assets/images/MessageInActive.svg';
import MessageActive from '../assets/images/MessageActive.svg';
import ProfileActive from '../assets/images/ProfileActive.svg';
import ProfileInActive from '../assets/images/ProfileInActive.svg';
const Tab = createBottomTabNavigator();

export default function NavBottomBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#36ACFD',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#08060F',
          // backgroundColor: 'gray',
          height: 95,
          borderTopColor: '#203140',
          borderWidth: 1,
          width: '100%',
          justifyContent: 'center',
          alignSelf: 'center',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <HomeActive /> : <HomeInActive />,
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <MessageActive /> : <MessageInActive />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <ProfileActive /> : <ProfileInActive />,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});
