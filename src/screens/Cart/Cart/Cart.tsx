import React from 'react';
import { Text } from 'react-native';

import { CartStackNavigatorParamsList } from 'navigation/types';
import { useAppSelector } from 'hooks';

import { styles } from './Cart.styles';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { SafeAreaView } from 'react-native-safe-area-context';

export const CartScreen = () => {
  const { products: cartProducts, total: cartTotal } = useAppSelector(
    (state) => state.cart
  );

  const navigation =
    useNavigation<StackNavigationProp<CartStackNavigatorParamsList>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Halu Cart Screen</Text>
    </SafeAreaView>
  );
};
