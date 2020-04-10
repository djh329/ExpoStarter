import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import * as firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './Home/Home'
const homeIcon = (icon) => <FontAwesome name="home" size={icon && icon.focused ? 18 : 14} color={icon && icon.color ? icon.color : '#000000'} />;
const fileIcon = (icon) => <FontAwesome name="houzz" size={icon && icon.focused ? 18 : 14} color={icon && icon.color ? icon.color : '#000000'} />;

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName={'Audio'} tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#808080',
      }}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: homeIcon}} />
      <Tab.Screen name="!Home" component={Home} options={{tabBarIcon: fileIcon}}/>
    </Tab.Navigator>
  );
}
