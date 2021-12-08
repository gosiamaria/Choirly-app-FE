import React from "react";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
// import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import UserProfileScreen from "../Screens/UserProfileScreen.js";
import AllMembersScreen from "../Screens/AllMembersScreen";
import ChoirScreen from "../Screens/ChoirScreen";
import CreateChoirScreen from "../Screens/CreateChoirScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import EventScreen from "../Screens/EventScreen";
import JoiningScreen from "../Screens/JoiningScreen";
import NotificationsScreen from "../Screens/NotificationsScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import SingleMessageScreen from "../Screens/SingleMessageScreen";
import MainStackNavigator from "./StackNavigator";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen" options={{}}>
      <Drawer.Screen name="Joining" component={JoiningScreen} />
      {/*      
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
      */}

      <Drawer.Screen name="Home" component={HomeStack} />
      {/* <Drawer.Screen name="CreateChoir" component={CreateChoirScreen} /> */}

      <Drawer.Screen name="Profile" component={UserProfileScreen} />

      {/* <Drawer.Screen name="EditProfile" component={EditProfileScreen} /> */}

      <Drawer.Screen name="Choir" component={ChoirScreen} />

      {/* <Drawer.Screen name="AllMembers" component={AllMembersScreen} />
          <Drawer.Screen name="SingleMessage" component={SingleMessageScreen} />
          <Drawer.Screen name="EventScreen" component={EventScreen} /> */}

      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
