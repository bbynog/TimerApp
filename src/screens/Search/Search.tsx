import React from 'react';
import { Text } from 'react-native';

import { styles } from './Search.styles';

import { SafeAreaView } from 'react-native-safe-area-context';

export const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Halu Search Screen</Text>
    </SafeAreaView>
  );
};
