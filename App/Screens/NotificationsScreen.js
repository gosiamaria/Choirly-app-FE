import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Notification from "../components/Notification";
import { getNotificationByUsername } from "../utils/api";

import { auth } from "../../firebase";

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotificationByUsername("cakevealbladerunner").then((notifications) => {
      setNotifications(notifications);
    });
  }, []);

  console.log(auth.currentUser.displayName);

  return (
    <View>
      <Text>Notifications</Text>
      {notifications.map((notification) => {
        return (
          <Notification key={notification._id} notification={notification} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
