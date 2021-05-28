
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
import { useNavigation } from '@react-navigation/native';

function ProductDetailPage({ route,navigation}) {

    const nav = useNavigation(); 
  const [data, setdata] = useState([]);
  const currency=" $";
  function deleteProduct(id) {
    const newList = data.filter((data) => data.id !== id);

    setdata(newList);
  }
  return (
    <View>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
              <Appbar.BackAction onPress={() => {nav.goBack()}} />
        <Appbar.Content title={route.params.product.name} />

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

export default ProductDetailPage;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});