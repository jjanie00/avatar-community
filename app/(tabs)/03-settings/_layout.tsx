import { colors } from "@/constants";
import { Stack } from "expo-router";
import React from "react";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          // 화면 배경화면 색
          backgroundColor: colors.ORANGE_100,
        },
      }}
    >
      <Stack.Screen
        // index.tsx 파일을 화면으로 등록
        name="index"
        // 화면만의 옵션 설정
      />
    </Stack>
  );
}
