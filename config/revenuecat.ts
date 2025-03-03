// Replace these with your actual RevenueCat API keys from the RevenueCat dashboard
export const REVENUECAT_CONFIG = {
  ios: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_IOS || 'your_ios_key',
  android: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID || 'your_android_key',
};

// Define your entitlement IDs here
export const ENTITLEMENTS = {
  PREMIUM: 'premium',
  // Add more entitlements as needed
}; 