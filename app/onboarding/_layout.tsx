import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="features" />
      <Stack.Screen name="problem" />
      <Stack.Screen name="solution" />
      <Stack.Screen name="final" />
    </Stack>
  );
} 