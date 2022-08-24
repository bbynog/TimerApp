import React from 'react';
import { Text } from 'react-native';

import { LoadingScreen, RoundedButton } from 'components';

import { styles } from './Home.styles';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  const isLoading = false;

  const navigation = useNavigation();
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Halu Home Screen</Text>
      <RoundedButton
        label={'Go to Test'}
        onPress={() => navigation.navigate('TestStack')}
      />
    </SafeAreaView>
  );
};
