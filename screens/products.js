
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
// import { ListItem, Avatar } from 'react-native-elements';
import { Appbar,List,Colors,Divider,IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';


function ProductPage({ navigation }) {
  const [data, setdata] = useState([]);
  const currency=" $";
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
      <List.Item
        title={item.name}
        // description="Item description"
        description={currency+item.unitPrice}
        left={props => <List.Icon color={Colors.grey600} icon="shopping" />}
        right={props =>   <IconButton
                            icon="delete"
                            color={Colors.red700}
                            size={20}
                            onPress={() => {
                              console.log(item.name)
                              deleteProduct(item.name)}}
                          />
                          }
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.3,
        }}
      />
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