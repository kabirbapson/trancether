import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeActive from '../../assets/images/HomeActive.svg';
import HomeInActive from '../../assets/images/HomeInActive.svg';
import MessageInActive from '../../assets/images/MessageInActive.svg';
import MessageActive from '../../assets/images/MessageActive.svg';
import ProfileActive from '../../assets/images/ProfileActive.svg';
import ProfileInActive from '../../assets/images/ProfileInActive.svg';

import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';

export default function Dashboard() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarActiveTintColor: '#36ACFD',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#08060F',
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
        name="Message"
        component={Messages}
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
