import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { ANIMATIONS } from '../constants/theme';

interface AnimationConfig {
  duration?: number;
  easing?: (value: number) => number;
  delay?: number;
  useNativeDriver?: boolean;
}

export const useFloatAnimation = (config?: AnimationConfig) => {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: config?.duration || ANIMATIONS.duration.slow,
          easing: config?.easing || Easing.inOut(Easing.ease),
          delay: config?.delay || 0,
          useNativeDriver: config?.useNativeDriver ?? true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: config?.duration || ANIMATIONS.duration.slow,
          easing: config?.easing || Easing.inOut(Easing.ease),
          useNativeDriver: config?.useNativeDriver ?? true,
        }),
      ])
    ).start();
  }, [floatAnim, config]);

  return {
    transform: [
      {
        translateY: floatAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -10],
        }),
      },
    ],
  };
};

export const usePulseAnimation = (config?: AnimationConfig) => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: config?.duration || ANIMATIONS.duration.base,
          easing: config?.easing || Easing.inOut(Easing.ease),
          delay: config?.delay || 0,
          useNativeDriver: config?.useNativeDriver ?? true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: config?.duration || ANIMATIONS.duration.base,
          easing: config?.easing || Easing.inOut(Easing.ease),
          useNativeDriver: config?.useNativeDriver ?? true,
        }),
      ])
    ).start();
  }, [pulseAnim, config]);

  return {
    transform: [{ scale: pulseAnim }],
  };
};

export const useSlideAnimation = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  config?: AnimationConfig
) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: config?.duration || ANIMATIONS.duration.base,
      easing: config?.easing || Easing.out(Easing.ease),
      delay: config?.delay || 0,
      useNativeDriver: config?.useNativeDriver ?? true,
    }).start();
  }, [slideAnim, config]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return {
          translateY: slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0],
          }),
        };
      case 'down':
        return {
          translateY: slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 0],
          }),
        };
      case 'left':
        return {
          translateX: slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0],
          }),
        };
      case 'right':
        return {
          translateX: slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 0],
          }),
        };
    }
  };

  return {
    transform: [getTransform()],
    opacity: slideAnim,
  };
}; 