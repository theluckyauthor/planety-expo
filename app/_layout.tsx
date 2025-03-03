import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { ThemeProvider } from '@/context/ThemeContext';
import { useOnboarding } from '@/hooks/useOnboarding';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { isFirstLaunch } = useOnboarding();

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
          redirect={isFirstLaunch}
        />
        <Stack.Screen
          name="onboarding/features"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding/final"
          options={{ headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}
