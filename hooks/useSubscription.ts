import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Purchases, { CustomerInfo, PurchasesPackage } from 'react-native-purchases';
import { REVENUECAT_CONFIG, ENTITLEMENTS } from '../config/revenuecat';

export const useSubscription = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [packages, setPackages] = useState<PurchasesPackage[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializePurchases();
  }, []);

  const initializePurchases = async () => {
    try {
      if (Platform.OS === 'ios') {
        await Purchases.configure({ apiKey: REVENUECAT_CONFIG.ios });
      } else if (Platform.OS === 'android') {
        await Purchases.configure({ apiKey: REVENUECAT_CONFIG.android });
      }

      // Get customer info
      const customerInfo = await Purchases.getCustomerInfo();
      setCustomerInfo(customerInfo);
      
      // Check if user has premium entitlement
      const hasPremium = customerInfo.entitlements.active[ENTITLEMENTS.PREMIUM];
      setIsSubscribed(!!hasPremium);

      // Get available packages
      const offerings = await Purchases.getOfferings();
      if (offerings.current?.availablePackages) {
        setPackages(offerings.current.availablePackages);
      }
    } catch (error) {
      console.error('Error initializing purchases:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePurchase = async (packageToPurchase: PurchasesPackage) => {
    try {
      const { customerInfo } = await Purchases.purchasePackage(packageToPurchase);
      setCustomerInfo(customerInfo);
      const hasPremium = customerInfo.entitlements.active[ENTITLEMENTS.PREMIUM];
      setIsSubscribed(!!hasPremium);
      return true;
    } catch (error) {
      console.error('Error making purchase:', error);
      return false;
    }
  };

  const restorePurchases = async () => {
    try {
      const customerInfo = await Purchases.restorePurchases();
      setCustomerInfo(customerInfo);
      const hasPremium = customerInfo.entitlements.active[ENTITLEMENTS.PREMIUM];
      setIsSubscribed(!!hasPremium);
      return true;
    } catch (error) {
      console.error('Error restoring purchases:', error);
      return false;
    }
  };

  return {
    isSubscribed,
    isLoading,
    packages,
    customerInfo,
    handlePurchase,
    restorePurchases,
  };
}; 