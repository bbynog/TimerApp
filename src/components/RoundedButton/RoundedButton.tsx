import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { styles } from './RoundedButton.styles';

import { useTheme } from '@react-navigation/native';

interface RoundedButtonProps {
  label?: string;
  icon?: JSX.Element;
  labelColor?: string;
  backgroundColor?: string;
  height?: number;
  width?: number;
  onPress: (any?: any) => any;
  style?: ViewStyle;
}

export const RoundedButton = ({
  label = '',
  icon,
  labelColor,
  backgroundColor,
  onPress,
  style,
  height,
  width,
}: RoundedButtonProps) => {
  const { colors } = useTheme();
  label = label?.toUpperCase();

  const buttonStyles = [
    styles.buttonContainer,
    {
      backgroundColor: backgroundColor || colors.onPrimary,
      height: height || 45,
      width: width || 160,
    },
    style,
  ];

  const labelTextStyles = [styles.labelText, { color: labelColor }];

  return (
    <TouchableOpacity style={buttonStyles} onPress={() => onPress?.()}>
      <View style={styles.labelContainer}>
        <Text style={labelTextStyles}>{label}</Text>
      </View>
      <View style={styles.iconContainer}>{icon}</View>
    </TouchableOpacity>
  );
};
