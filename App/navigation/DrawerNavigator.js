import React from "react";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
// import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import UserProfileScreen from "../Screens/UserProfileScreen.js";
import MainStackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen
        options={{ drawerItemStyle: { display: "none" } }}
        name="stack"
        component={MainStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
