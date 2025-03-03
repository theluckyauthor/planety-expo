import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = '@onboarding_complete';

export const useOnboarding = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem(ONBOARDING_KEY);
      setIsFirstLaunch(value === null);
    } catch (error) {
      console.error('Error checking first launch:', error);
      setIsFirstLaunch(false);
    }
  };

  const setIsOnboarded = async (value: boolean) => {
    try {
      if (value) {
        await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
      } else {
        await AsyncStorage.removeItem(ONBOARDING_KEY);
      }
      setIsFirstLaunch(!value);
    } catch (error) {
      console.error('Error setting onboarding status:', error);
    }
  };

  return {
    isFirstLaunch,
    setIsOnboarded,
  };
}; 