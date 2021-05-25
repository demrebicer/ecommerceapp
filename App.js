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
    <View style={{}}>
      <Text>Home screen</Text>
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    </View>
  );
}

function CategoriesPage({ navigation }) {
  const [data, setdata] = useState([]);
  function deleteProduct(name) {
    const newList = data.filter((data) => data.name !== name);

    setdata(newList);
  }

  useEffect(() => {
    if (data.length == 0) {
      axios
        .get('https://northwind.vercel.app/api/categories')
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
    <View style={{}}>
      <Text>categories screen</Text>
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator  screenOptions={{animationEnabled: false}}>

      <Stack.Screen name="index" component={indexPage} />

      <Stack.Screen name="Product" component={ProductPage} />

      <Stack.Screen name="Categories" component={CategoriesPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
