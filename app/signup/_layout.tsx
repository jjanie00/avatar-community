import { colors } from "@/constants";
import Foundation from "@expo/vector-icons/Foundation";
import { Link, Stack } from "expo-router";
import React from "react";

export default function SignupLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "회원가입",
          headerLeft: () => (
            <Link href={"/"} replace>
              <Foundation name="home" size={24} color={"black"} />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
