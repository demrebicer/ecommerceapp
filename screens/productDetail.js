
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  FlatList,
  Button,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
// import { ListItem, Avatar } from 'react-native-elements';
import { Appbar,List,Colors,Divider,IconButton,DataTable } from 'react-native-paper';
import { StyleSheet } from 'react-native';


function ProductPage({ navigation }) {
  const [data, setdata] = useState([]);
  const currency=" $";
  function deleteProduct(id) {
    const newList = data.filter((data) => data.id !== id);

    setdata(newList);
  }

  useEffect(() => {
    if (data.length == 0) {
      axios
        .get('https://northwind.vercel.app/api/products/5')
        .then((response) => {
          setdata(response.data);
          console.log(data, 'aaaa');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });


  return (
    <View>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title={data.name==null?"Product Detail":data.name} />

      </Appbar.Header>

      <View style={{flexDirection:"row"}}>

      <View>
      <Text>Product Name: </Text>
      </View>

      <View>
      <Text>Demre</Text>
      </View>

      </View>

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