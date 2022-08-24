import { StyleSheet } from 'react-native';
import { theme } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    borderRadius: 150,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 40,
  },
  actionsContainer: {},
});
