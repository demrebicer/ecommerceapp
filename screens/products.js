
import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';




function ProductPage({ navigation }) {
  const [data, setdata] = useState([]);
  function deleteProduct(name) {
    const newList = data.filter((data) => data.name !== name);

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
    <ListItem bottomDivider>
      <ListItem.Content style={{ flexDirection: 'row' }}>
        <Text style={{ flex: 4 }}>{item.name}</Text>
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'red' }}
          onPress={() => {
            console.log(item.name);
            deleteProduct(item.name);
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
        <Appbar.Content title="Products" />
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

export default ProductPage;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});