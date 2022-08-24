import React from 'react';

import {
  HomeScreen,
  SearchScreen,
  CartScreen,
  ProfileScreen,
  AboutScreen,
} from 'screens';

import { StackNavigatorParamsList, StackScreen } from './StackNavigator.types';

import { createStackNavigator } from '@react-navigation/stack';
import { stackNavigatorScreenDefaultOptions } from './StackNavigator.options';
import { TestScreen } from 'screens/Home/Test/Test';

const Stack = createStackNavigator<StackNavigatorParamsList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenDefaultOptions}>
      <Stack.Screen name={StackScreen.HOME} component={HomeScreen} />
      <Stack.Screen name={'TestStack'} component={TestScreen} />
    </Stack.Navigator>
  );
};

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenDefaultOptions}>
      <Stack.Screen name={StackScreen.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenDefaultOptions}>
      <Stack.Screen name={StackScreen.CART} component={CartScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenDefaultOptions}>
      <Stack.Screen name={StackScreen.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenDefaultOptions}>
      <Stack.Screen name={StackScreen.ABOUT} component={AboutScreen} />
    </Stack.Navigator>
  );
};
