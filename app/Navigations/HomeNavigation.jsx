import { View, Text } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../Screens/Home";
import PlaceDetails from "../Components/PlaceDetail/PlaceDetails";

export default function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="place-detail" component={PlaceDetails} />
    </Stack.Navigator>
  );
}
