import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Animated,
  FlatList,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
// import { ListItem, Avatar } from 'react-native-elements';
import {
  Appbar,
  List,
  Colors,
  Divider,
  IconButton,
  DataTable,
} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { userContext } from '../contexts/userContext';

function ProductDetailPage({ route, navigation }) {
  const ctx = useContext(userContext);
  console.log('ctx:', ctx);
  const nav = useNavigation();
  const [data, setdata] = useState([]);
  const currency = ' $';
  function deleteProduct(id) {
    const newList = data.filter((data) => data.id !== id);

    setdata(newList);
  }

  return (
    <View style={{ backgroundColor: ctx.background, paddingBottom: 1000 }}>
      <Appbar.Header style={{ backgroundColor: ctx.primary }}>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.BackAction
          onPress={() => {
            nav.goBack();
          }}
        />
        <Appbar.Content title={route.params.product.name} />
      </Appbar.Header>

      <View style={{ flexDirection: 'column' }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            ID:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.id}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Supplier ID:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.supplierId}{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Category ID:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.categoryId}{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Quantity Per Unit:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.quantityPerUnit}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Unit Price:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.unitPrice}{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Units In Stock:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.unitsInStock}{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Units On Order:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.unitsOnOrder}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Reorder Level:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.reorderLevel}{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Discontinued:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.discontinued.toString()}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderColor: ctx.text,
            padding: 10,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'space-between',
              fontWeight: 'bold',
              padding: 15,
              color: ctx.text,
            }}>
            Name:{' '}
          </Text>
          <View style={styles.verticleLine}></View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 15,
              color: ctx.text,
            }}>
            {route.params.product.name}{' '}
          </Text>
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

  verticleLine: {
    height: '100%',
    width: 0.1,
    backgroundColor: '#909090',
    flex: 0.01,
  },
});
