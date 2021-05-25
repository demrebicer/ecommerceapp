import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import indexPage from './screens/index'
import CategoriesPage from './screens/categories'
import productsPage from './screens/products'
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MyStack() {
  return (
<Tab.Navigator>
      <Tab.Screen name="Index" component={indexPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
