import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  Image,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { ListItem, Avatar } from 'react-native-elements';
import {userContext} from './contexts/userContext';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//PAGES
import productsPage from './screens/products';
import CategoriesPage from './screens/categories';
import ordersPage from './screens/orders';
import productDetailPage from './screens/productDetail';
import addCategoryPage from './screens/addCategory';
import updateCategoryPage from './screens/updateCategories';
import { useNavigation } from '@react-navigation/native';
import { BottomNavigation, Text, Appbar } from 'react-native-paper';

const _goBack = () => console.log('Went back');

const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'products', title: 'Products', icon: 'cart' },
    { key: 'categories', title: 'Categories', icon: 'folder' },
    { key: 'orders', title: 'Orders', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    products: productsPage,
    categories: CategoriesPage,
    orders: ordersPage,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const Stack = createStackNavigator();

const themes: Themes = {
  light: {
    primary: '#590ce4',
    secondary: '#ffffff',
    text: '#202020',
    textSecondary: '#717171',
    icon: '#757575',
    listitem: '#f6f6f6',
    buttonDanger: '#c23e39',
    buttonPrimary: '#3874cc',
    background: '#f6f6f6',
  },
  dark: {
    primary: '#590ce4',
    secondary: '#be88ff',
    text: '#e3e3e3',
    textSecondary: '#939393',
    icon: '#c38fff',
    listitem: '#1d1d1d',
    buttonDanger: '#c23e39',
    buttonPrimary: '#03dac6',
    background: '#121212',
  },
};



function HomeScreen(navigation) {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => nav.goBack()} />
      <Text>Home Screen</Text>
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false, animationEnabled: false }}
        name="Updates"
        component={MyComponent}
      />
      <Stack.Screen
        options={{ headerShown: false, animationEnabled: false }}
        name="updateCategoryPage"
        component={updateCategoryPage}
        initialParams={{ name: '', desc: '' }}
      />
      <Stack.Screen
        options={{ headerShown: false, animationEnabled: false }}
        name="addCategoryPage"
        component={addCategoryPage}
      />
      <Stack.Screen
        options={{ headerShown: false, animationEnabled: false }}
        name="productDetailPage"
        component={productDetailPage}
        initialParams={{ product: {} }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <userContext.Provider value={themes.dark}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </userContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
