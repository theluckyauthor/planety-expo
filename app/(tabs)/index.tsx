import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useOnboarding } from '@/hooks/useOnboarding';
import { useRouter } from 'expo-router';
import { useSubscription } from '@/hooks/useSubscription';
import { PaywallButton } from '@/components/PaywallButton';

export default function TabOneScreen() {
  const router = useRouter();
  const { setIsOnboarded } = useOnboarding();
  const { isSubscribed } = useSubscription();

  const handleContinue = () => {
    if (!isSubscribed) {
      // Show upgrade option
      setIsOnboarded(true);
    }
    router.push('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome</ThemedText>
      <ThemedText>Get started with your new app!</ThemedText>
      {!isSubscribed && <PaywallButton />}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
