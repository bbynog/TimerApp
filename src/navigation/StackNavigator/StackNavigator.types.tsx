import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type HomeStackNavigatorParamsList = {
  HomeStack: undefined;
  TestStack: undefined;
};

export type SearchStackNavigatorParamsList = {
  SearchStack: undefined;
};

export type CartStackNavigatorParamsList = {
  CartStack: undefined;
};

export type ProfileStackNavigatorParamsList = {
  ProfileStack: undefined;
};

export type AboutStackNavigatorParamsList = {
  AboutStack: undefined;
};

export type StackNavigatorParamsList = HomeStackNavigatorParamsList &
  SearchStackNavigatorParamsList &
  CartStackNavigatorParamsList &
  ProfileStackNavigatorParamsList &
  AboutStackNavigatorParamsList;

export enum StackScreen {
  HOME = 'HomeStack',
  PRODUCT_DETAILS = 'ProductDetailsStack',
  SEARCH = 'SearchStack',
  CART = 'CartStack',
  CHECKOUT = 'CheckoutStack',
  PROFILE = 'ProfileStack',
  ABOUT = 'AboutStack',
}

export interface LeftHeaderProps {
  route: RouteProp<StackNavigatorParamsList>;
  navigation: DrawerNavigationProp<StackNavigatorParamsList>;
  drawerScreens: StackScreen[];
}

export interface StackNavigatorProps {
  route: RouteProp<StackNavigatorParamsList>;
  navigation: DrawerNavigationProp<StackNavigatorParamsList>;
}

export interface RouteInProps {
  route: RouteProp<StackNavigatorParamsList>;
}

export interface NavigationInProps {
  navigation: DrawerNavigationProp<StackNavigatorParamsList>;
}
