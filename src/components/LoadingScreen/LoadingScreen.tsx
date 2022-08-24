import React from 'react';
import { ActivityIndicator } from 'react-native';

import { customColors } from 'theme';

import { styles } from './LoadingScreen.styles';

import { SafeAreaView } from 'react-native-safe-area-context';

interface LoadingScreenProps {}

export const LoadingScreen = ({}: LoadingScreenProps) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ActivityIndicator size={'large'} color={customColors.logoGreen} />
    </SafeAreaView>
  );
};
