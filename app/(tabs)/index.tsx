// home screen
import FeedItem from "@/components/FeedItem";
import SearchInputField from "@/components/SearchInputField";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

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
        <SearchInputField />
      </View>
      <View style={styles.feedItemContainer}>
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
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
    paddingVertical: 8,
  },
  feedItemContainer: {
    paddingTop: 12,
    gap: 12,
    backgroundColor: "#E2E8F0",
  },
});
