import { StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useOnboarding } from '@/hooks/useOnboarding';

const { width } = Dimensions.get('window');

export default function FinalScreen() {
  const router = useRouter();
  const { setIsFirstLaunch } = useOnboarding();

  const handleStart = () => {
    setIsFirstLaunch(false);
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Animated.View 
              entering={FadeInDown.delay(300).springify()}
              style={styles.iconContainer}
            >
              <Ionicons name="rocket" size={64} color="#6C63FF" />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(500).springify()}>
              <ThemedText type="title" style={styles.title}>
                Ready for Launch
              </ThemedText>
            </Animated.View>
          </View>

          <View style={styles.body}>
            <Animated.View entering={FadeInDown.delay(700).springify()}>
              <ThemedText style={styles.description}>
                Your journey to stronger friendships starts now. Let's begin by creating your first friend planet.
              </ThemedText>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(900).springify()}>
              <ThemedText style={styles.description}>
                Remember, meaningful connections take time. We're here to help you nurture them, one orbit at a time.
              </ThemedText>
            </Animated.View>
          </View>

          <Animated.View 
            entering={FadeInDown.delay(1100).springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleStart}
            >
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                Launch Planety
              </ThemedText>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    gap: 24,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E8E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  body: {
    gap: 24,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 18,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 28,
  },
  buttonContainer: {
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
}); 