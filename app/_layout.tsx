// splash screen
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Pretendard: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <GestureHandlerRootView>
      <Stack>
        {/* Safe Area를 고려하여 헤더 표시 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
