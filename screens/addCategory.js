import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements';
import { Appbar,List,Colors,Divider,IconButton,TextInput,Button,Dialog } from 'react-native-paper';
import { StyleSheet } from 'react-native';
 import { Formik } from 'formik';
 import { useNavigation } from '@react-navigation/native';



function addCategoriesPage({ navigation }) {
  const nav = useNavigation(); 
  const [data, setdata] = useState([]);
  const [categoryname, setcategoryname] = React.useState('');
  const [categorydetail, setcategorydetail] = React.useState('');

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

  

  return (
    <View>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {nav.goBack()}} />
      <Appbar.Content title="Add a new Category" />
      

    </Appbar.Header>
    
    <TextInput
      label="Category Name"
      mode="outlined"
      value={categoryname}
      onChangeText={text => setcategoryname(text)}
      style={{marginLeft:30,marginRight:30,marginTop:30,marginBottom:15}}
      outlineColor={Colors.purple400}
    />
    <TextInput
      label="Category Detail"
      mode="outlined"
      value={categorydetail}
      onChangeText={text => setcategorydetail(text)}
      style={{marginLeft:30,marginRight:30}}
      outlineColor={Colors.purple400}
    />
    <Button icon="plus" mode="contained" style={{marginLeft:90,marginRight:90,marginTop:30,marginBottom:15}} onPress={() => {
      console.log(categoryname,categorydetail)
      if(categoryname==""||categorydetail==""){
        console.log("dasda")
        Alert.alert("Attention","Please fill the blanks")
      }

      let params;
        params = new URLSearchParams();
        params.append('id', parseInt(data[data.length-1].id)+1);
        params.append('name', categoryname);
        params.append('description', categorydetail);
        axios.post('https://northwind.vercel.app/api/categories',params).then((response) => {
        nav.goBack();
        })
      
    }}>
    Add a new Category
    </Button>

    </View>
  );
}
export default addCategoriesPage;