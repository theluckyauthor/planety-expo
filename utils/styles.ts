import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SPACING, BORDER_RADIUS } from '../constants/theme';

export const createThemedStyle = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? COLORS.background.dark : COLORS.background.light,
    },
    glassCard: {
      backgroundColor: isDark
        ? 'rgba(31, 41, 55, 0.7)'
        : 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(10px)',
      borderRadius: BORDER_RADIUS.base,
      borderWidth: 1,
      borderColor: isDark
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(31, 41, 55, 0.1)',
      ...SHADOWS.base,
    },
    gradientText: {
      color: isDark ? COLORS.white : COLORS.spaceBlue.dark,
      textShadowColor: isDark
        ? COLORS.spacePurple.light
        : COLORS.spacePurple.DEFAULT,
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 4,
    },
    floatingCard: {
      backgroundColor: isDark ? COLORS.spaceBlue.dark : COLORS.white,
      borderRadius: BORDER_RADIUS.lg,
      padding: SPACING.md,
      ...SHADOWS.lg,
    },
    textPrimary: {
      color: isDark ? COLORS.white : COLORS.spaceBlue.dark,
    },
    textSecondary: {
      color: isDark
        ? 'rgba(255, 255, 255, 0.7)'
        : 'rgba(31, 41, 55, 0.7)',
    },
    border: {
      borderColor: isDark
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(31, 41, 55, 0.1)',
      borderWidth: 1,
    },
  });

export const commonStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  padding: {
    padding: SPACING.md,
  },
  paddingHorizontal: {
    paddingHorizontal: SPACING.md,
  },
  paddingVertical: {
    paddingVertical: SPACING.md,
  },
  margin: {
    margin: SPACING.md,
  },
  marginHorizontal: {
    marginHorizontal: SPACING.md,
  },
  marginVertical: {
    marginVertical: SPACING.md,
  },
}); 