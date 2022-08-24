import { NavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigatorParamsList, TabScreen } from 'navigation/types';

export type HomeDrawerNavigatorParamsList = {
  HomeDrawer: undefined;
};

export type AboutDrawerNavigatorParamsList = {
  AboutDrawer: undefined;
};

export type DrawerNavigatorParamsList = HomeDrawerNavigatorParamsList &
  AboutDrawerNavigatorParamsList;

export enum DrawerScreen {
  HOME = 'HomeDrawer',
  ABOUT = 'AboutDrawer',
}

export interface HomeDrawerNavigatorProps {
  navigation: NavigationProp<BottomTabNavigatorParamsList, TabScreen.CART>;
  route: RouteProp<DrawerNavigatorParamsList>;
}

export interface DrawerNavigatorProps {
  navigation: NavigationProp<DrawerNavigatorParamsList>;
  route: RouteProp<DrawerNavigatorParamsList>;
}
