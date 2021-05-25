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
function Home({ navigation }) {
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

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
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
