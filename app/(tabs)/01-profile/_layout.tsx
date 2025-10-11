import { colors } from "@/constants";
import { Stack } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.ORANGE_200,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Profile",
        }}
      />
    </Stack>
  );
}
