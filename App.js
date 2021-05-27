import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  Image,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//PAGES
import CategoriesPage from './screens/categories'
import productsPage from './screens/products'
import ordersPage from './screens/orders'

import { BottomNavigation, Text, Appbar } from 'react-native-paper';

const _goBack = () => console.log('Went back');

const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'products', title: 'Products', icon: 'cart' },
    { key: 'categories', title: 'Categories', icon: 'folder' },
    { key: 'orders', title: 'Orders', icon: 'history' },
  ]);


  const renderScene = BottomNavigation.SceneMap({
    products: productsPage,
    categories: CategoriesPage,
    orders: ordersPage,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});