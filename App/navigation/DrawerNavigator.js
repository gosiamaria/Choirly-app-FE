import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import UserProfileScreen from "../Screens/UserProfileScreen.js"


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
);
}

export default DrawerNavigator;