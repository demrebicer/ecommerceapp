
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
function indexPage({ navigation }) {
 
  return (
    <View style={{flexDirection:"column"}}>
      <TouchableOpacity    onPress={() => {
            navigation.navigate("Product")
    
          }}
          ><Text>PRODUCTS</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => {
            navigation.navigate("Categories")
    
          }}><Text>CATEGORIES</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => {
    
          }}><Text>ORDERS</Text></TouchableOpacity>
    </View>
  );
}
export default indexPage;