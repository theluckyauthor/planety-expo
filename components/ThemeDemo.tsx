import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import type { FC } from 'react';
import { useTheme } from '../context/ThemeContext';
import { createThemedStyle, commonStyles } from '../utils/styles';
import { useFloatAnimation, usePulseAnimation, useSlideAnimation } from '../hooks/useAnimation';
import { COLORS, SPACING, FONTS } from '../constants/theme';

export const ThemeDemo: FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const themedStyles = createThemedStyle(isDark);
  
  const floatAnim = useFloatAnimation();
  const pulseAnim = usePulseAnimation();
  const slideUpAnim = useSlideAnimation('up', { delay: 300 });

  return (
    <View style={[themedStyles.container, styles.container]}>
      <Animated.View style={[themedStyles.glassCard, styles.card, slideUpAnim]}>
        <Text style={[themedStyles.textPrimary, styles.title]}>
          Theme & Animation Demo
        </Text>
        
        <Animated.View style={[styles.planetContainer, floatAnim]}>
          <View style={[styles.planet, { backgroundColor: COLORS.spacePurple.DEFAULT }]} />
        </Animated.View>

        <Animated.View style={[themedStyles.floatingCard, styles.infoCard, pulseAnim]}>
          <Text style={[themedStyles.textSecondary, styles.infoText]}>
            Current Theme: {isDark ? 'Dark' : 'Light'}
          </Text>
        </Animated.View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: COLORS.carrotOrange }]}
          onPress={toggleTheme}
        >
          <Text style={styles.buttonText}>Toggle Theme</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.center,
    padding: SPACING.md,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: SPACING.md,
    alignItems: 'center',
    gap: SPACING.md,
  },
  title: {
    fontFamily: FONTS.display.bold,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  planetContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planet: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoCard: {
    width: '100%',
    alignItems: 'center',
    marginVertical: SPACING.sm,
  },
  infoText: {
    fontFamily: FONTS.body.medium,
    fontSize: 16,
  },
  button: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 8,
    marginTop: SPACING.sm,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: FONTS.body.semibold,
    fontSize: 16,
  },
}); 