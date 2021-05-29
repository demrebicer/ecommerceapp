import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Button,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
// import { ListItem, Avatar } from 'react-native-elements';
import { Appbar, List, Colors, Divider, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductDetailPage from './productDetail';
import HomeScreen from '../App';

import { userContext } from '../contexts/userContext';

function ProductPage({ navigation }) {
  const ctx = useContext(userContext);
  console.log('ctx:', ctx);
  const nav = useNavigation();

  const [data, setdata] = useState([]);
  const currency = ' $';
  function deleteProduct(id) {
    const newList = data.filter((data) => data.id !== id);

    setdata(newList);
  }

  useEffect(() => {
    if (data.length == 0) {
      axios
        .get('https://northwind.vercel.app/api/products')
        .then((response) => {
          setdata(response.data);
          console.log(data, 'aaaa');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <List.Item
      title={item.name}
      // description="Item description"
      description={
        'Price: ' +
        currency +
        item.unitPrice +
        '\n' +
        'Avaible Stock: ' +
        item.unitsInStock
      }
      left={(props) => <List.Icon color={ctx.icon} size={28} icon="shopping" />}
      right={(props) => (
        <IconButton
          icon="delete"
          color={Colors.red700}
          size={28}
          onPress={() => {
            console.log(item.id);
            deleteProduct(item.id);
          }}
        />
      )}
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3,
        backgroundColor: ctx.background,
      }}
      titleStyle={{ color: ctx.text }}
      descriptionStyle={{ color: ctx.textSecondary }}
      onPress={() => {
        console.log('bastın');
        nav.navigate('productDetailPage', { product: item });
      }}
    />
  );

  return (
    <View style={{ backgroundColor: ctx.background }}>
      <Appbar.Header style={{ backgroundColor: ctx.primary }}>
        <Appbar.Action icon="theme-light-dark" color={ctx.buttonPrimary} onPress={() => {}} />
        <Appbar.Content title="Products" />
      </Appbar.Header>

      <FlatList
        style={{ marginBottom: 100 }}
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    </View>
  );
}

export default ProductPage;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
