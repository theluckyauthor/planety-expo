import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingState {
  isFirstLaunch: boolean;
  setIsFirstLaunch: (value: boolean) => void;
}

export const useOnboarding = create<OnboardingState>()(
  persist(
    (set) => ({
      isFirstLaunch: true,
      setIsFirstLaunch: (value) => set({ isFirstLaunch: value }),
    }),
    {
      name: 'onboarding-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
); 