import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from './theme';
import { BottomTabNavigator } from 'navigation/TabNavigator/TabNavigator';

import * as SplashScreen from 'expo-splash-screen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { store } from './store/store';
import { Provider as ReduxProvider } from 'react-redux';

import { QueryClientProvider } from 'react-query';
import reactQueryService from './services/ReactQueryService/ReactQueryService';

// import 'react-native-gesture-handler';

export const Index = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const queryClient = reactQueryService.getQueryClient();

  const appTheme = {
    ...DefaultTheme,
    ...theme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors,
    },
  };

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.appContainer} onLayout={onLayoutRootView}>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <SafeAreaProvider>
            <NavigationContainer theme={appTheme}>
              <BottomTabNavigator />
            </NavigationContainer>
            <StatusBar style={'auto'} />
          </SafeAreaProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
