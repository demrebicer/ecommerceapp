
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
 
      <View style={styles.rowView}><Text style={styles.leftText}>ID: </Text><View style={styles.verticleLine}></View><Text style={styles.rightText}>{route.params.product.id}</Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Supplier ID: </Text><View style={styles.verticleLine}></View><Text style={styles.rightText}>{route.params.product.supplierId} </Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Category ID: </Text><View style={styles.verticleLine}></View><Text style={styles.rightText}>{route.params.product.categoryId} </Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Quantity Per Unit: </Text><View style={styles.verticleLine}></View><Text style={styles.rightText}>{route.params.product.quantityPerUnit}</Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Unit Price: </Text><View style={styles.verticleLine}></View><Text style={   styles.rightText  }>{route.params.product.unitPrice} </Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Units In Stock: </Text><View style={styles.verticleLine}></View><Text style={ styles.rightText }>{route.params.product.unitsInStock} </Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Units On Order: </Text><View style={styles.verticleLine}></View><Text style={styles.rightText }>{route.params.product.unitsOnOrder}</Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Reorder Level: </Text><View style={styles.verticleLine}></View><Text style={ styles.rightText }>{route.params.product.reorderLevel} </Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Discontinued: </Text><View style={styles.verticleLine}></View><Text style={ styles.rightText }>{route.params.product.discontinued.toString()}</Text></View>
      <View style={styles.rowView}><Text style={styles.leftText}>Name: </Text><View style={styles.verticleLine}></View><Text style={   styles.rightText }>{route.params.product.name} </Text></View>


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
  rowView:{

    flexDirection:"row",borderWidth: 0.2,padding:10
  }, verticleLine:{
    height: '100%',
    width: 0.1,
    backgroundColor: '#909090',flex:0.01
  },
  leftText:{flex:1,textAlign: 'space-between',fontWeight: 'bold',padding:15},
  rightText:{flex:1,textAlign: 'center',padding:15},
});