import React from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

// screens
import Home from '../screens/Home';
import Location from '../screens/Location';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function NavBottomBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? size + 8 : size + 5;
            color = focused ? '#2A9D8F' : 'black';
          } else if (route.name === 'Location') {
            iconName = focused ? 'location' : 'location-outline';
            size = focused ? size + 8 : size + 5;
            color = focused ? '#2A9D8F' : 'black';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            size = focused ? size + 8 : size + 5;
            color = focused ? '#2A9D8F' : 'black';
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'cyan',
          height: 60,
          margin: 10,
          borderRadius: 15,
          width: 322,
          justifyContent: 'center',
          alignSelf: 'center',
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});
