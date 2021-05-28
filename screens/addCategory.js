import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
  SafeAreaView,TextInput 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements';
import { Appbar,List,Colors,Divider,IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
 import { Formik } from 'formik';



function addCategoriesPage({ navigation }) {
  const [data, setdata] = useState([]);
  function deleteCategory(id) {
    const newList = data.filter((data) => data.id !== id);

    setdata(newList);
  }

  useEffect(() => {
  });

  

  return (
      <Formik
      style = {{flexDirection:"column"}}
     initialValues={{ categoryName: '',categoryDetail:'' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{padding:20,flexDirection:"column",flex:1}}>
          <Text>PRODUCT NAME</Text>
           <TextInput
            style={{backgroundColor:"white",flex:1,   
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,

  }}
           onChangeText={handleChange('product name')}
           onBlur={handleBlur('product name')}
           value={values.email}
         />
        <Text>PRODUCT DETAIL</Text>
          <TextInput
          style={{backgroundColor:"gray",flex:1,    
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    margin: 15,
}}
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />

       
         <TouchableOpacity style={{backgroundColor:"red",flex:1,    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    margin: 5}}><Text>SUBMIT</Text></TouchableOpacity>
 
       </View>
     )}
   </Formik>

  );
}
export default addCategoriesPage;