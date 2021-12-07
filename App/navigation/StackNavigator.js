import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllMembersScreen from "../Screens/AllMembersScreen";
import ChoirScreen from "../Screens/ChoirScreen";
import CreateChoirScreen from "../Screens/CreateChoirScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import EventScreen from "../Screens/EventScreen";
import JoiningScreen from "../Screens/JoiningScreen";
import NotificationsScreen from "../Screens/NotificationsScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import SingleMessageScreen from "../Screens/SingleMessageScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="AllMembers" component={AllMembersScreen} />
        <Stack.Screen name="Choir" component={ChoirScreen} />
        <Stack.Screen name="CreateChoir" component={CreateChoirScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="Joining" component={JoiningScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SingleMessage" component={SingleMessageScreen} />
    </Stack.Navigator>
    )
}

export default MainStackNavigator;