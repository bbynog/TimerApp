import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Test.styles';

interface TestProps {}

export const TestScreen = ({}: TestProps) => {
  return (
    <View style={styles.container}>
      <Text>Halu Test</Text>
    </View>
  );
};
