import { ExtendedTheme } from '@react-navigation/native';
import '@react-navigation/native';

export const theme: ExtendedTheme = {
  dark: false,
  colors: {
    primary: '#2E3746',
    primaryVariant: '#5A6476',
    primaryContrast: '#C4C4C4',
    onPrimary: '#ffffff',
    secondary: '#FFC600',
    secondaryVariant: '#F9C705',
    background: '#F0F0F0',
    card: '#f5f5f6',
    text: '#000000',
    notification: 'rgb(255, 69, 58)',
  },
};

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      primaryVariant: string;
      primaryContrast: string;
      onPrimary: string;
      secondary: string;
      secondaryVariant: string;
      background: string;
      card: string;
      text: string;
      notification: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
