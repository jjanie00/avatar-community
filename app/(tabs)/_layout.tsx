// tab layout
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "프로필",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "설정",
        }}
      />
    </Tabs>
  );
}
