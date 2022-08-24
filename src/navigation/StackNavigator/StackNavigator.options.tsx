import { theme } from 'theme';

import { DefaultHeaderRight, LeftHeader } from './StackNavigator.components';
import { StackNavigatorProps, StackScreen } from './StackNavigator.types';

import { StackNavigationOptions } from '@react-navigation/stack';
import { sliceStackFromScreenName } from './StackNavigator.functions';

const { colors } = theme;

const SCREENS_TO_EXHIBIT_DRAWER_CLICKABLE_ON_HEADER_BAR = [
  StackScreen.HOME,
  StackScreen.SEARCH,
  StackScreen.CART,
  StackScreen.PROFILE,
  StackScreen.HOME,
  StackScreen.ABOUT,
];

export const stackNavigatorScreenDefaultOptions = ({
  route,
  navigation,
}: StackNavigatorProps): StackNavigationOptions => {
  return {
    headerRight: () => <DefaultHeaderRight />,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.onPrimary,
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerLeft: () => (
      <LeftHeader
        route={route}
        navigation={navigation}
        drawerScreens={SCREENS_TO_EXHIBIT_DRAWER_CLICKABLE_ON_HEADER_BAR}
      />
    ),
    headerTitle: sliceStackFromScreenName(route.name),
  };
};

export const stackNavigatorScreenOptions = () => {
  return {};
};
