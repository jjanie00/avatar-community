import Foundation from "@expo/vector-icons/Foundation";
import { Link, Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
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
