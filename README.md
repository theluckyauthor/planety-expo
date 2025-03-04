Planety: Friendship Management App
Bringing friends closer, one meaningful connection at a time.
Problem Planety Solves
In today’s world, people struggle to maintain friendships after major life transitions such as graduating, moving, or becoming busier with work. Many friendships fade not because of lack of care, but due to lack of effort and organization. Traditional social media does not help strengthen relationships—it often promotes superficial connections rather than meaningful ones.
How Planety Solves It
Planety provides a structured yet fun way to track, nurture, and engage with friendships. It helps users organize their social circles, remember important moments, and maintain a balance between different types of friendships through gamification and reminders. By categorizing friendships and encouraging intentional interactions, Planety ensures users don’t lose touch with people who matter.
Core Features
1. Friendship Categorization & Tracking
Users take a fun quiz when adding a friend to determine their ‘friend planet’ (e.g., best friend = Earth, casual friend = Saturn, long-distance friend = Neptune, etc.).
Friendship categories help users visualize and understand their relationships better.
Users can manually adjust a friend's category at any time.
2. Meaningful Interaction Reminders
AI-driven or manual reminders prompt users to check in with friends based on their interaction patterns.
Gentle nudges encourage thoughtful interactions without overwhelming users.
3. Memory & Event Tracking
Users can log memories, events, and milestones in friendships.
Provides a visual timeline of shared experiences, making it easy to reminisce and stay engaged.
4. Event Planning
Users can create events easily with friends and friend groups, from 1-on-1 coffee talks to group board game nights.
All your social life in one place.
Bonus Features / Nice-to-Haves
1. Missions & Streaks
Users earn rewards by maintaining friendships through small weekly interactions (e.g., sending a message, meeting up, or planning an event).
Weekly Streaks encourage consistency without being overly demanding.
2. Friendship Insights & Trends (Premium Feature)
Users get insights into their friendship habits (e.g., who they interact with most, who they haven’t talked to in a while, etc.).
Helps users identify relationship patterns and areas for improvement.
3. AI-Powered Suggestions (Premium Feature)
AI can suggest activities, conversation starters, or reconnection ideas based on friendship type and shared history.
More Information
Onboarding Experience
4 slides introducing the app’s purpose and how it improves friendships.
Interactive quiz for initial friendship categorization.
Paywall & Monetization
Freemium model: Basic features are free, with premium upgrades for deeper insights, AI suggestions, and the ability to categorize more friends.
Superwall integration for handling payments and access management.
30-Day March Mayhem Challenge
The goal is to develop Planety in 30 days, reach 1,000 downloads, and generate $100 in revenue.
Tech Stack
React Native + Expo for cross-platform mobile development.
Firebase for authentication, backend, and cloud storage.
Superwall for paywall and premium access handling.
SQLite (expo-sqlite) with Drizzle for local database storage.
Privacy-first approach: Authentication is required for personalization, but user data remains private and secure. Cloud sync is available for convenience, with export/import options for control over data.
Parallax effects, microinteractions, and soft animations for a cozy, whimsical user experience.
Design Aesthetic & Vibe
Planety blends Friendly & Whimsical with Cosmic & Futuristic aesthetics:
Color Palette: White & carrot orange for the logo, space purples and deep blues for the UI.
Typography: Legible sans-serif or semi-handwritten font for a personal touch.
UI Elements: Soft, rounded icons with subtle gradients and solid colors.
Day/Night Mode: UI colors shift based on the time of day for a dynamic experience.
Inspiration: Think of a futuristic Animal Crossing with cozy space-themed elements.

Let’s build a fun, meaningful way for people to keep their friendships alive! 🚀



import { useTheme } from '../context/ThemeContext';
import { createThemedStyle } from '../utils/styles';
import { COLORS, SPACING } from '../constants/theme';

const YourComponent = () => {
  const { isDark } = useTheme();
  const themedStyles = createThemedStyle(isDark);

  return (
    <View style={themedStyles.container}>
      {/* Your component content */}
    </View>
  );
};

import { useFloatAnimation } from '../hooks/useAnimation';

const YourComponent = () => {
  const floatAnim = useFloatAnimation();

  return (
    <Animated.View style={[styles.container, floatAnim]}>
      {/* Your animated content */}
    </Animated.View>
  );
};