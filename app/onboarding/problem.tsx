import { StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function ProblemScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/solution');
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
              <Ionicons name="help-circle" size={64} color="#6C63FF" />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(500).springify()}>
              <ThemedText type="title" style={styles.title}>
                The Problem
              </ThemedText>
            </Animated.View>
          </View>

          <View style={styles.body}>
            <Animated.View entering={FadeInDown.delay(700).springify()}>
              <ThemedText style={styles.description}>
                Life transitions can make it hard to stay connected with friends. Whether it's moving to a new city, changing jobs, or starting a family, maintaining meaningful friendships becomes challenging.
              </ThemedText>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(900).springify()}>
              <ThemedText style={styles.description}>
                Without a system to track and nurture these relationships, even our closest friendships can fade over time.
              </ThemedText>
            </Animated.View>
          </View>

          <Animated.View 
            entering={FadeInDown.delay(1100).springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleNext}
            >
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                See the Solution
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