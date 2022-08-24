import React from 'react';
import { Text } from 'react-native';

import { styles } from './Profile.styles';

import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Halu Profile Screen</Text>
    </SafeAreaView>
  );
};
