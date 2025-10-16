// home screen
import FeedList from "@/components/FeedList";
import SearchInputField from "@/components/SearchInputField";
import { colors } from "@/constants";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/auth")}>
          <Image
            source={require("@/assets/images/profile.png")}
            style={{ width: 44, height: 44 }}
          />
        </Pressable>
        <SearchInputField readOnly onPress={() => router.push("/search")} />
      </View>
      <View style={styles.feedListContainer}>
        <FeedList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    // 안드로이드 StatusBar 고려
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 8,
    paddingBottom: 8,
  },
  feedListContainer: {
    paddingTop: 12,
    backgroundColor: colors.GRAY_200,
  },
});
