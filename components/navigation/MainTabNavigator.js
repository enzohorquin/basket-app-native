import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../TabBarIcon';

/* import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
 */
import Cart from '../containers/Cart.js';
import Category from '../containers/Category';
import OrderHistory from '../containers/OrderHistory';
import Search from '../containers/Search';
import ProductResultScreen from '../containers/ProductResultScreen';

const CategoryStack = createStackNavigator({
  Category: Category,
});

CategoryStack.navigationOptions = {
  tabBarLabel: 'Category',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
    />
  ),
};

const CartStack = createStackNavigator({
    Cart: Cart,
});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
};

const OrderStack = createStackNavigator({
  Order: OrderHistory,
});

OrderStack.navigationOptions = {
  tabBarLabel: 'Order History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-archive' : 'md-archive'}
    />
  ),
};

export default createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
});
