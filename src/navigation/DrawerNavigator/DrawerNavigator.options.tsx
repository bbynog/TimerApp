import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { sliceDrawerFromScreenName } from './DrawerNavigator.functions';
import { DrawerNavigatorProps } from './DrawerNavigator.types';

export const drawerNavigatorDefaultOptions = () => {
  return {
    headerShown: false,
  };
};

export const drawerScreensDefaultOptions = ({
  route,
}: DrawerNavigatorProps): DrawerNavigationOptions => {
  return {
    drawerLabel: sliceDrawerFromScreenName(route.name),
  };
};
