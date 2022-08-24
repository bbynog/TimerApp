import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './About.styles';

interface AboutProps {}

export const AboutScreen = ({}: AboutProps) => {
  return (
    <View style={styles.container}>
      <Text>Halu About Screen</Text>
    </View>
  );
};
