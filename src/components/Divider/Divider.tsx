import React from 'react';
import { View } from 'react-native';

interface DividerProps {
  size?: number;
}

export const Divider = ({ size = 2 }: DividerProps) => {
  const dividerStyles = [{ marginVertical: size / 2 }];
  return <View style={dividerStyles} />;
};
