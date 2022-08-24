import { StyleSheet } from 'react-native';
import { theme } from 'theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryContrast,
  },
});
