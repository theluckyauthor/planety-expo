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

const features = [
  {
    icon: 'planet',
    title: 'Friend Planets',
    description: 'Organize friends into meaningful categories based on your relationship',
  },
  {
    icon: 'notifications',
    title: 'Smart Reminders',
    description: 'Get gentle nudges to stay in touch with the people who matter most',
  },
  {
    icon: 'heart',
    title: 'Meaningful Connections',
    description: 'Track and nurture your friendships with purpose and care',
  },
];

export default function FeaturesScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/problem');
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              Key Features
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              Your toolkit for maintaining meaningful friendships
            </ThemedText>
          </View>

          <View style={styles.features}>
            {features.map((feature, index) => (
              <Animated.View
                key={feature.title}
                entering={FadeInDown.delay(300 * index).springify()}
                style={styles.featureCard}
              >
                <View style={styles.iconContainer}>
                  <Ionicons name={feature.icon} size={32} color="#6C63FF" />
                </View>
                <View style={styles.featureText}>
                  <ThemedText type="defaultSemiBold" style={styles.featureTitle}>
                    {feature.title}
                  </ThemedText>
                  <ThemedText style={styles.featureDescription}>
                    {feature.description}
                  </ThemedText>
                </View>
              </Animated.View>
            ))}
          </View>

          <Animated.View 
            entering={FadeInDown.delay(1200).springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleNext}
            >
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                Next
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
  },
  header: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
  },
  features: {
    gap: 16,
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E8E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 40,
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