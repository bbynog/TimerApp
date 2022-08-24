import React from 'react';

import { HomeScreen, SearchScreen } from 'screens';

import { StackNavigatorParamsList, StackScreen } from './StackNavigator.types';

import { createStackNavigator } from '@react-navigation/stack';
import { TestScreen } from 'screens/Home/Test/Test';

const Stack = createStackNavigator<StackNavigatorParamsList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackScreen.HOME} component={HomeScreen} />
      <Stack.Screen name={'TestStack'} component={TestScreen} />
    </Stack.Navigator>
  );
};

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackScreen.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};
