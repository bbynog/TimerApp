import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { theme } from 'theme';

import { styles } from './StackNavigator.styles';
import {
  LeftHeaderProps,
  StackScreen,
  NavigationInProps,
} from './StackNavigator.types';

import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
} from '@expo/vector-icons';

const { colors } = theme;

interface DefaultHeaderRightProps {
  chatOnPress?: () => void;
  notificationOnPress?: () => void;
}

export const DefaultHeaderRight = ({
  chatOnPress,
  notificationOnPress,
}: DefaultHeaderRightProps) => {
  return (
    <View style={styles.homeHeaderRightContainer}>
      <TouchableOpacity onPress={() => chatOnPress?.()}>
        <Ionicons
          name={'ios-chatbubble-outline'}
          style={styles.chatBubbleIconStyles}
          color={colors.onPrimary}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => notificationOnPress?.()}>
        <MaterialCommunityIcons
          name={'bell-outline'}
          size={25}
          color={colors.onPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export const LeftHeader = ({
  route,
  navigation,
  drawerScreens,
}: LeftHeaderProps) => {
  if (
    drawerScreens.includes(route.name as StackScreen) ||
    drawerScreens.includes(route.name as StackScreen)
  ) {
    return <ClickableDrawerMenu navigation={navigation} />;
  } else {
    return <ClickableArrowBack navigation={navigation} />;
  }
};

const ClickableDrawerMenu = ({ navigation }: NavigationInProps) => {
  return (
    <View style={styles.clickableDrawerMenuContainer}>
      <TouchableOpacity onPress={() => navigation?.openDrawer()}>
        <Entypo name={'menu'} size={25} color={colors.onPrimary} />
      </TouchableOpacity>
    </View>
  );
};

const ClickableArrowBack = ({ navigation }: NavigationInProps) => {
  return (
    <View style={styles.clickableArrowBackContainer}>
      <TouchableOpacity onPress={() => navigation?.goBack()}>
        <AntDesign name={'arrowleft'} size={25} color={colors.onPrimary} />
      </TouchableOpacity>
    </View>
  );
};
