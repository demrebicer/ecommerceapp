import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
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
  TextInput,
  Button,
  Dialog,
} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { userContext } from '../contexts/userContext';

function UpdateCategoryPage({ route, navigation }) {
  const ctx = useContext(userContext);
  console.log('ctx:', ctx);
  const nav = useNavigation();
  const [data, setdata] = useState([]);
  const [categoryname, setcategoryname] = React.useState(route.params.name);
  const [categorydetail, setcategorydetail] = React.useState(route.params.desc);
  function deleteCategory(id) {
    const newList = data.filter((data) => data.id !== id);

    setdata(newList);
  }

  // useEffect(() => {

  //   // console.log("hüloo",route.params.name)
  //   // if (data.length == 0) {
  //   //   axios
  //   //     .get('https://northwind.vercel.app/api/categories')
  //   //     .then((response) => {
  //   //       setdata(response.data);
  //   //       console.log(response.data, 'aaaa');
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(error);
  //   //     });
  //   // }

  // });

  return (
    <View style={{ backgroundColor: ctx.background, paddingBottom: 1000 }}>
      <Appbar.Header style={{ backgroundColor: ctx.primary }}>
        <Appbar.BackAction
          onPress={() => {
            nav.goBack();
          }}
        />
        <Appbar.Content title="Update a Category" />
      </Appbar.Header>

      <TextInput
        label="Category Name"
        mode="outlined"
        value={categoryname}
        onChangeText={(text) => setcategoryname(text)}
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 30,
          marginBottom: 15,
        }}
        theme={{
          colors: {
            placeholder: ctx.text,
            text: ctx.text,
            primary: ctx.text,
            underlineColor: 'transparent',
            background: ctx.primary,
          },
        }}
        outlineColor={Colors.purple400}
      />
      <TextInput
        label="Category Detail"
        mode="outlined"
        value={categorydetail}
        onChangeText={(text) => setcategorydetail(text)}
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 30,
          marginBottom: 15,
        }}
        theme={{
          colors: {
            placeholder: ctx.text,
            text: ctx.text,
            primary: ctx.text,
            underlineColor: 'transparent',
            background: ctx.primary,
          },
        }}
        outlineColor={Colors.purple400}
      />
      <Button
        icon="update"
        mode="contained"
        style={{
          marginLeft: 90,
          marginRight: 90,
          marginTop: 30,
          marginBottom: 15,
        }}
        onPress={() => {
          if (categoryname == '' || categorydetail == '') {
            console.log('dasda');
            Alert.alert('Attention', 'Please fill the blanks');
          }

          let params;
          params = new URLSearchParams();
          params.append('id', parseInt(route.params.id));
          params.append('name', categoryname);
          params.append('description', categorydetail);
          axios
            .put(
              'https://northwind.vercel.app/api/categories/' + route.params.id,
              params
            )
            .then((response) => {
              nav.goBack();
            });
        }}>
        Update Category
      </Button>
    </View>
  );
}
export default UpdateCategoryPage;
