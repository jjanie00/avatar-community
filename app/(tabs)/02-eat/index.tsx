import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
// 아이콘 클릭 > log 화면으로 이동
export default function EatFoodScreen() {
  return (
    <View>
      <Link href={"/(tabs)/02-eat/log"}>
        <Text>Log 화면</Text>
      </Link>
    </View>
  );
}
