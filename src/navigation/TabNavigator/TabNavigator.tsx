import React from 'react';

import {
  HomeStackNavigator,
  SearchStackNavigator,
} from '../StackNavigator/StackNavigator';

import { BottomTabNavigatorParamsList, TabScreen } from './TabNavigator.types';
import {
  homeTabScreenOptions,
  searchTabScreenOptions,
  tabNavigatorOptions,
} from './TabNavigator.options';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamsList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatorOptions}>
      <Tab.Screen
        name={TabScreen.HOME}
        component={HomeStackNavigator}
        options={homeTabScreenOptions}
      />
      <Tab.Screen
        name={TabScreen.SEARCH}
        component={SearchStackNavigator}
        options={searchTabScreenOptions}
      />
    </Tab.Navigator>
  );
};
