import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { ThemeProvider } from '@/context/ThemeContext';
import { useOnboarding } from '@/hooks/useOnboarding';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { isFirstLaunch } = useOnboarding();
  const segments = useSegments();
  const router = useRouter();

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

  useEffect(() => {
    if (!loaded) return;

    // Check if we're not already in the onboarding flow
    const inOnboarding = segments[0] === 'onboarding';

    if (isFirstLaunch && !inOnboarding) {
      // Redirect to onboarding if it's first launch
      router.replace('/onboarding');
    } else if (!isFirstLaunch && inOnboarding) {
      // Redirect to main app if not first launch
      router.replace('/(tabs)');
    }
  }, [loaded, isFirstLaunch, segments]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth"
          options={{ headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}
