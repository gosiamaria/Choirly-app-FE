import RegisterScreen from "../Screens/RegisterScreen";
import CreateChoirScreen from "../Screens/CreateChoirScreen";
import HomeScreen from "../Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={HomeScreen}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="CreateChoir" component={CreateChoirScreen} />
    </Stack.Navigator>
  );
}
