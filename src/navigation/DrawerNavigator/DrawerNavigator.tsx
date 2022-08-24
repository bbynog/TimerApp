import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutStackNavigator } from 'navigation/StackNavigator/StackNavigator';
import { BottomTabNavigator } from 'navigation/TabNavigator/TabNavigator';
import {
  drawerNavigatorDefaultOptions,
  drawerScreensDefaultOptions,
} from './DrawerNavigator.options';
import {
  DrawerNavigatorParamsList,
  DrawerScreen,
} from './DrawerNavigator.types';

const Drawer = createDrawerNavigator<DrawerNavigatorParamsList>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerScreen.HOME}
      screenOptions={drawerNavigatorDefaultOptions}
    >
      <Drawer.Screen
        name={DrawerScreen.HOME}
        component={BottomTabNavigator}
        options={drawerScreensDefaultOptions}
      />
      <Drawer.Screen
        name={DrawerScreen.ABOUT}
        component={AboutStackNavigator}
        options={drawerScreensDefaultOptions}
      />
    </Drawer.Navigator>
  );
};
