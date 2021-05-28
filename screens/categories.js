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
import HomeScreen from '../App';
import { useNavigation } from '@react-navigation/native';


function CategoriesPage({ navigation }) {
  const nav = useNavigation(); 
  const [data, setdata] = useState([]);
  function deleteCategory(id) {
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
                            console.log(item.id)
                            deleteCategory(item.id)}}
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
        <Appbar.Action icon="plus-box"  onPress={() => nav.navigate('addCategoryPage')}/>
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
