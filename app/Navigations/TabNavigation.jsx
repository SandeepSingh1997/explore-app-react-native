import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Fav from "../Screens/Fav";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import Search from "../Screens/Search";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (color, size) => <Ionicons name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => <Ionicons name="search" size={20} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Fav}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: () => <Ionicons name="heart" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}
