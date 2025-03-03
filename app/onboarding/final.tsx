import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PaywallButton } from '@/components/PaywallButton';

export default function OnboardingFinalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Ready to Start?
      </ThemedText>
      <ThemedText style={styles.description}>
        Upgrade to premium to unlock all features and start building amazing apps today!
      </ThemedText>
      <PaywallButton />
      <Link href="/(tabs)" style={styles.skipLink}>
        <ThemedText type="link">Skip for now</ThemedText>
      </Link>
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
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    marginBottom: 24,
  },
  skipLink: {
    marginTop: 16,
  },
}); 