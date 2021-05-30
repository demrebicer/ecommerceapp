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
import { ListItem, Avatar } from 'react-native-elements';
import {
  Appbar,
  List,
  Colors,
  Divider,
  IconButton,
  DataTable,
} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { themes } from '../App';
import { userContext } from '../contexts/userContext';

function ordersPage({ navigation }) {
  const [ctx, setctx] = useContext(userContext);
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
        })
        .catch((error) => {});
    }
  });

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <DataTable.Row style={{ flexDirection: 'row' }}>
      <DataTable.Cell style={{ flex: 3, justifyContent: 'left' }}>
        {' '}
        <Text style={{ flexShrink: 1, color: ctx.textSecondary }}>
          {item.shipName}
        </Text>{' '}
      </DataTable.Cell>
      <DataTable.Cell style={{ flex: 2, justifyContent: 'center' }} numeric>
        <Text style={{ color: ctx.textSecondary }}>
          {item.orderDate.substring(0, 10)}
        </Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ flex: 1.5, justifyContent: 'center' }} numeric>
        <Text style={{ color: ctx.textSecondary }}>{item.id}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ flex: 1.5, justifyContent: 'center' }} numeric>
        <Text style={{ color: ctx.textSecondary }}>{item.customerId}</Text>
      </DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <View style={{ backgroundColor: ctx.background }}>
      <Appbar.Header style={{ backgroundColor: ctx.primary }}>
        <Appbar.Content title="Orders" />
        <Appbar.Action
          icon="theme-light-dark"
          color={ctx.buttonPrimary}
          onPress={() => {
            if (ctx.background == themes.dark.background) {
              setctx(themes.light);
            } else {
              setctx(themes.dark);
            }
          }}
        />
      </Appbar.Header>

      <DataTable.Header style={{ flexDirection: 'row' }}>
        <DataTable.Title style={{ flex: 3, justifyContent: 'left' }}>
          <Text style={{ color: ctx.text }}>Ship Name</Text>
        </DataTable.Title>
        <DataTable.Title style={{ flex: 2, justifyContent: 'center' }} numeric>
          <Text style={{ color: ctx.text }}>Order Date</Text>
        </DataTable.Title>
        <DataTable.Title
          style={{ flex: 1.5, justifyContent: 'center' }}
          numeric>
          <Text style={{ color: ctx.text }}>Order ID</Text>
        </DataTable.Title>
        <DataTable.Title
          style={{ flex: 1.5, justifyContent: 'center' }}
          numeric>
          <Text style={{ color: ctx.text }}>Customer ID</Text>
        </DataTable.Title>
      </DataTable.Header>

      <FlatList
        style={{ marginBottom: 150 }}
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    </View>
  );
}
export default ordersPage;
