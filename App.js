import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import BottomTabNavigator from "./App/navigation/DrawerNavigator";
import DrawerNavigator from "./App/navigation/DrawerNavigator";
import MainStackNavigator from "./App/navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
