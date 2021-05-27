import React, { useState, useEffect } from 'react';
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
import { ListItem, Avatar } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';




function ordersPage({ navigation }) {
  const [data, setdata] = useState([]);
  function deleteProduct(id) {
    const newList = data.filter((data) => data.id !== id);

    setdata(newList);
  }

  useEffect(() => {
    if (data.length == 0) {
      axios
        .get('https://northwind.vercel.app/api/orders')
        .then((response) => {
          setdata(response.data);
          console.log(response.data, 'orders');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content style={{ flexDirection: 'row' }}>
        <Text style={{ flex: 4 }}>{item.shipName}</Text>
        <Text style={{ flex: 4 }}>{item.orderDate}</Text>
         <Text style={{ flex: 4 }}>{item.id}</Text>
          <Text style={{ flex: 4 }}>{item.customerId}</Text>
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'red' }}
          onPress={() => {
            console.log('item.id');
            deleteProduct(item.id);
          }}>
          <Text>SİL</Text>
        </TouchableOpacity>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="Orders" />
        <Appbar.Action icon="magnify" onPress={console.log()} />
        <Appbar.Action icon="dots-vertical" onPress={console.log()} />
      </Appbar.Header>


            <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />

    </View>
  );
}
export default ordersPage;