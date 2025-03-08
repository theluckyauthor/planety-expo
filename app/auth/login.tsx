import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { COLORS, SPACING } from '../../constants/theme';
import { useTheme } from '../../context/ThemeContext';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { GoogleSignInButton } from '../../components/GoogleSignInButton';

export default function Login() {
  const { theme } = useTheme();

  const handleLogin = () => {
    // TODO: Implement email login
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>Welcome Back!</Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Sign in to continue your journey
        </Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <Button onPress={handleLogin} style={styles.button}>
            Continue with Email
          </Button>

          <View style={styles.divider}>
            <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
            <Text style={[styles.dividerText, { color: theme.textSecondary }]}>or</Text>
            <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
          </View>

          <GoogleSignInButton />

          <View style={styles.footer}>
            <Text style={[styles.footerText, { color: theme.textSecondary }]}>
              Don't have an account?{' '}
            </Text>
            <Link href="/auth/signup" asChild>
              <TouchableOpacity>
                <Text style={[styles.link, { color: theme.primary }]}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: SPACING.large,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: SPACING.xxlarge,
    textAlign: 'center',
  },
  form: {
    gap: SPACING.medium,
  },
  button: {
    marginTop: SPACING.small,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.large,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: SPACING.medium,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.large,
  },
  footerText: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 