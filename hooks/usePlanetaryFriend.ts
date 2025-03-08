import { PlanetyAPI } from '@/lib/api/client';
import { Database } from '@/lib/database';
import { useAuth } from '@/lib/supabase/auth';

export function usePlanetaryFriend(friendId: string) {
  const { session } = useAuth();
  const api = PlanetyAPI.getInstance();
  const db = Database.getInstance();
  const [loading, setLoading] = useState(false);

  const updateFriendCategory = async (interactionData: InteractionData) => {
    setLoading(true);
    try {
      // Get category from protected backend logic
      const category = await api.categorizeFriend(interactionData);
      
      // Save to local DB with sync
      await db.saveFriend({
        id: friendId,
        category,
        lastUpdated: new Date(),
      });

      return category;
    } finally {
      setLoading(false);
    }
  };

  return {
    updateFriendCategory,
    loading,
  };
} 