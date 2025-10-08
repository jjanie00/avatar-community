import { colors } from "@/constants";
import { Stack } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          // 화면 배경화면 색
          backgroundColor: colors.GRAY_700,
        },
      }}
    >
      <Stack.Screen
        // index.tsx 파일을 화면으로 등록
        name="index"
        // 화면만의 옵션 설정
        options={{
          // headerShown 이 true 시 보임
          title: "프로필",
        }}
      />
    </Stack>
  );
}
