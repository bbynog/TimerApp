import React, { useState } from 'react';

import { styles } from './Home.styles';

import { SafeAreaView } from 'react-native-safe-area-context';

interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
