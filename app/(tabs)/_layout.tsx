import { Tabs } from 'expo-router';
import { Chrome as Home, Info } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Game',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="how-to-play"
        options={{
          title: 'How to Play',
          tabBarIcon: ({ size, color }) => <Info size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}