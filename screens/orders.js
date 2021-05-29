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
import {themes} from '../App';
import { userContext } from '../contexts/userContext';

function ordersPage({ navigation }) {
  const [ctx, setctx] = useContext(userContext);
  console.log('ctx:', ctx);
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
    // <ListItem bottomDivider>
    //   <ListItem.Content style={{ flexDirection: 'row' }}>
    //     <Text style={{ flex: 4 }}>{item.shipName}</Text>
    //     <Text style={{ flex: 4 }}>{item.orderDate}</Text>
    //      <Text style={{ flex: 4 }}>{item.id}</Text>
    //       <Text style={{ flex: 4 }}>{item.customerId}</Text>
    //     <TouchableOpacity
    //       style={{ flex: 1, backgroundColor: 'red' }}
    //       onPress={() => {
    //         console.log('item.id');
    //         deleteProduct(item.id);
    //       }}>
    //       <Text>SİL</Text>
    //     </TouchableOpacity>
    //   </ListItem.Content>
    // </ListItem>

    <DataTable.Row style={{ flexDirection: 'row' }}>
      <DataTable.Cell style={{ flex: 3, justifyContent: 'left' }}>
        {' '}
        <Text style={{ flexShrink: 1,color:ctx.textSecondary }}>{item.shipName}</Text>{' '}
      </DataTable.Cell>
      <DataTable.Cell style={{ flex: 2, justifyContent: 'center' }} numeric>
        <Text style={{color:ctx.textSecondary}}>{item.orderDate.substring(0, 10)}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ flex: 1.5, justifyContent: 'center' }} numeric>
        <Text style={{color:ctx.textSecondary}}>{item.id}</Text>
      </DataTable.Cell>
      <DataTable.Cell style={{ flex: 1.5, justifyContent: 'center' }} numeric>
        <Text style={{color:ctx.textSecondary}}>{item.customerId}</Text>
      </DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <View style={{ backgroundColor: ctx.background }}>
      <Appbar.Header style={{ backgroundColor: ctx.primary }}>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="Orders" />
      </Appbar.Header>

      <DataTable.Header style={{ flexDirection: 'row' }}>
        <DataTable.Title style={{ flex: 3, justifyContent: 'left' }}>
          <Text style={{color:ctx.text}}>Ship Name</Text>
        </DataTable.Title>
        <DataTable.Title style={{ flex: 2, justifyContent: 'center' }} numeric>
          <Text style={{color:ctx.text}}>Order Date</Text>
        </DataTable.Title>
        <DataTable.Title
          style={{ flex: 1.5, justifyContent: 'center' }}
          numeric>
          <Text style={{color:ctx.text}}>Order ID</Text>
        </DataTable.Title>
        <DataTable.Title
          style={{ flex: 1.5, justifyContent: 'center' }}
          numeric>
          <Text style={{color:ctx.text}}>Customer ID</Text>
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
