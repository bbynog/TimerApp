import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient';

interface GradientProps {
  colors: string[];
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | string | null;
  startGradientPoint?: LinearGradientPoint;
  endGradientPoint?: LinearGradientPoint;
}

const defaultGradientStartPoint = { x: 0.5, y: 1 };
const defaultGradientEndPoint = { x: 0.5, y: 0 };

export const Gradient = ({
  style,
  colors,
  children,
  startGradientPoint = defaultGradientStartPoint,
  endGradientPoint = defaultGradientEndPoint,
}: GradientProps) => {
  return (
    <>
      <LinearGradient
        colors={colors}
        style={style}
        start={startGradientPoint}
        end={endGradientPoint}
      >
        {children}
      </LinearGradient>
    </>
  );
};
