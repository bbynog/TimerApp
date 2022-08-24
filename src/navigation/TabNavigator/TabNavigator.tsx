import React from 'react';

import {
  HomeStackNavigator,
  SearchStackNavigator,
  CartStackNavigator,
  ProfileStackNavigator,
} from '../StackNavigator/StackNavigator';

import { BottomTabNavigatorParamsList, TabScreen } from './TabNavigator.types';
import {
  cartTabScreenOptions,
  homeTabScreenOptions,
  profileTabScreenOptions,
  searchTabScreenOptions,
  tabNavigatorOptions,
} from './TabNavigator.options';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreen } from 'navigation/types';

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
      <Tab.Screen
        name={TabScreen.CART}
        component={CartStackNavigator}
        options={cartTabScreenOptions}
      />
      <Tab.Screen
        name={TabScreen.PROFILE}
        component={ProfileStackNavigator}
        options={profileTabScreenOptions}
      />
    </Tab.Navigator>
  );
};
