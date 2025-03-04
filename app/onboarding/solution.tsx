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

const solutions = [
  {
    icon: 'planet',
    title: 'Friend Planets',
    description: 'Organize friends into meaningful orbits based on your relationship dynamics',
  },
  {
    icon: 'notifications',
    title: 'Smart Check-ins',
    description: 'Get gentle reminders to reach out at the right moments',
  },
  {
    icon: 'analytics',
    title: 'Relationship Insights',
    description: 'Track the health and growth of your friendships over time',
  },
];

export default function SolutionScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/final');
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
              <Ionicons name="bulb" size={64} color="#6C63FF" />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(500).springify()}>
              <ThemedText type="title" style={styles.title}>
                Our Solution
              </ThemedText>
            </Animated.View>
          </View>

          <View style={styles.solutions}>
            {solutions.map((solution, index) => (
              <Animated.View
                key={solution.title}
                entering={FadeInDown.delay(700 + (index * 200)).springify()}
                style={styles.solutionCard}
              >
                <View style={styles.iconContainer}>
                  <Ionicons name={solution.icon} size={32} color="#6C63FF" />
                </View>
                <View style={styles.solutionText}>
                  <ThemedText type="defaultSemiBold" style={styles.solutionTitle}>
                    {solution.title}
                  </ThemedText>
                  <ThemedText style={styles.solutionDescription}>
                    {solution.description}
                  </ThemedText>
                </View>
              </Animated.View>
            ))}
          </View>

          <Animated.View 
            entering={FadeInDown.delay(1500).springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleNext}
            >
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                Get Started
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
  solutions: {
    gap: 16,
  },
  solutionCard: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    gap: 16,
  },
  solutionText: {
    flex: 1,
  },
  solutionTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  solutionDescription: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
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