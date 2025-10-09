import { colors } from "@/constants";
import Foundation from "@expo/vector-icons/Foundation";
import { Link, Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
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
        name="auth"
        options={{
          title: "로그인",
          headerLeft: () => (
            <Link href={"/"} replace>
              <Foundation name="home" size={24} color={"black"} />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "이메일 로그인",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "회원가입",
        }}
      />
    </Stack>
  );
}
