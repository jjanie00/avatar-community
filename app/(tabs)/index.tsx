// home screen
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <CustomButton
        label="버튼"
        onPress={() => {
          router.push("/auth");
        }}
      />
    </View>
  );
}
