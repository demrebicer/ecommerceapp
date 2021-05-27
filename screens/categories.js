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
import { Appbar,List,Colors,Divider,IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';




function CategoriesPage({ navigation }) {
  const [data, setdata] = useState([]);
  function deleteProduct(id) {
    const newList = data.filter((data) => data.id !== id);

    setdata(newList);
  }

  useEffect(() => {
    if (data.length == 0) {
      axios
        .get('https://northwind.vercel.app/api/categories')
        .then((response) => {
          setdata(response.data);
          console.log(response.data, 'aaaa');
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
    //     <Text style={{ flex: 4 }}>{item.name.value == null? <Text>{item.name}</Text>: <Text>{item.name.value}</Text> }</Text>
        
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
        <List.Item
      title={item.name.value == null ? item.name : item.name.value} 
      // description="Item description"
      description={item.description}
      left={props => <List.Icon color={Colors.grey600} icon="folder" />}
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
        <Appbar.Content title="Categories" />
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
export default CategoriesPage;
