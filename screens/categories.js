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
import { Appbar, List, Colors, Divider, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import HomeScreen from '../App';
import { useNavigation } from '@react-navigation/native';

import { userContext } from '../contexts/userContext';

function CategoriesPage({ navigation }) {
  const ctx = useContext(userContext);
  console.log('ctx:', ctx);
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
          let dt = [];
          for (let i = 0; i < response.data.length; i++) {
            try {
              temp = {};
              temp.id = response.data[i].id;
              temp.name = response.data[i].name;
              temp.description = response.data[i].description;
              if (temp.name == undefined) {
                continue;
              }
              if (temp.description == undefined) {
                continue;
              }
              dt.push(temp);
            } catch (Exc) {
              console.log('hatalı');
              continue;
            }
          }
          setdata(dt);
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
      left={(props) => (
        <List.Icon color={ctx.icon} size={28} icon="folder" />
      )}
      right={(props) => (
        <View style={{ flexDirection: 'row' }}>
          <IconButton
            icon="delete"
            color={ctx.buttonDanger}
            size={28}
            style={{ marginLeft: 10 }}
            onPress={() => {
              console.log(item.id);
              deleteCategory(item.id);
            }}
          />
          <IconButton
            icon="lead-pencil"
            color={Colors.blue700}
            size={28}
            onPress={() => {
              nav.navigate('updateCategoryPage', {
                name: item.name.value == null ? item.name : item.name.value,
                desc: item.description,
                id: item.id,
              });
            }}
          />
        </View>
      )}
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3,
        backgroundColor: ctx.background,
      }}
      titleStyle={{ color: ctx.text }}
      descriptionStyle={{ color: ctx.textSecondary }}
      onPress={() => {
        nav.navigate('updateCategoryPage', {
          name: item.name.value == null ? item.name : item.name.value,
          desc: item.description,
          id: item.id,
        });
      }}
    />
  );

  return (
    <View style={{ backgroundColor: ctx.background }}>
      <Appbar.Header style={{ backgroundColor: ctx.primary }}>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="Categories" />
        <Appbar.Action
          icon="plus-box"
          color={ctx.buttonPrimary}
          onPress={() => nav.navigate('addCategoryPage')}
        />
      </Appbar.Header>

      <FlatList
        style={{ marginBottom: 100 ,backgroundColor: ctx.primary}}
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    </View>
  );
}
export default CategoriesPage;
