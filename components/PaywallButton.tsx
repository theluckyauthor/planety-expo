import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useSubscription } from '@/hooks/useSubscription';
import { ThemedText } from './ThemedText';

export function PaywallButton() {
  const { packages, handlePurchase } = useSubscription();

  const handlePress = async () => {
    if (packages.length > 0) {
      await handlePurchase(packages[0]);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <ThemedText type="defaultSemiBold">Upgrade to Premium</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
});