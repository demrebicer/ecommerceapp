
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

      <View style={{flexDirection:"column"}}>
 
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>id: </Text><Text style={             {flex:1}}>{route.params.product.id}</Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>supplierId: </Text><Text style={{     flex:1}}>{route.params.product.supplierId} </Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>categoryId: </Text><Text style={{     flex:1}}>{route.params.product.categoryId} </Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>quantityPerUnit: </Text><Text style={{flex:1}}>{route.params.product.quantityPerUnit}</Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>unitPrice: </Text><Text style={{      flex:1}}>{route.params.product.unitPrice} </Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>unitsInStock: </Text><Text style={{   flex:1}}>{route.params.product.unitsInStock} </Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>unitsOnOrder: </Text><Text style={{   flex:1}}>{route.params.product.unitsOnOrder}</Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>reorderLevel: </Text><Text style={{   flex:1}}>{route.params.product.reorderLevel} </Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>discontinued: </Text><Text style={{   flex:1}}>{route.params.product.discontinued}</Text></View>
      <View style={{flexDirection:"row"}}><Text style={{flex:1}}>name: </Text><Text style={{           flex:1}}>{route.params.product.name} </Text></View>


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