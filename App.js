import * as React from 'react';
import { BottomNavigation, Text, Appbar } from 'react-native-paper';
import { StyleSheet, SafeAreaView, View, FlatList, Image } from 'react-native';

const _goBack = () => console.log('Went back');

const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');

const ProductsRoute = () =>
  <View>
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="Products" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    {/* <SafeAreaView style={styles.container}>
      <Text>Products</Text>
    </SafeAreaView> */}

    <Text>Products</Text>

  </View>

////////////////////////////////////////////////////////
const Categoriesroute = () =>

  <View>
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="Categories" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    <Text>Categories</Text>

  </View>

////////////////////////////////////////////////////////
const OrdersRoute = () =>

  <View>
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="Orders" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>


    <Text>Orders</Text>

  </View>

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'products', title: 'Products', icon: 'cart' },
    { key: 'categories', title: 'Categories', icon: 'folder' },
    { key: 'orders', title: 'Orders', icon: 'history' },
  ]);




  const renderScene = BottomNavigation.SceneMap({
    products: ProductsRoute,
    categories: Categoriesroute,
    orders: OrdersRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});