import { StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/features');
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Animated.View 
            entering={FadeInUp.delay(300).springify()} 
            style={styles.header}
          >
            <Ionicons name="planet" size={120} color="#6C63FF" />
          </Animated.View>

          <View style={styles.textContainer}>
            <Animated.View entering={FadeInDown.delay(600).springify()}>
              <ThemedText type="title" style={styles.title}>
                Welcome to Planety
              </ThemedText>
            </Animated.View>
            
            <Animated.View entering={FadeInDown.delay(800).springify()}>
              <ThemedText style={styles.subtitle}>
                Your personal space for meaningful friendships
              </ThemedText>
            </Animated.View>
          </View>

          <Animated.View 
            entering={FadeInUp.delay(1000).springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleNext}
            >
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                Start Your Journey
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
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  textContainer: {
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: width * 0.8,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
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