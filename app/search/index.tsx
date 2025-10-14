// search screen
import SearchInputField from "@/components/SearchInputField";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import React from "react";
import { Platform, Pressable, StatusBar, StyleSheet, View } from "react-native";

export default function SearchScreen() {
  const handleSubmit = (text: string) => {
    console.log("검색", text);
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.inputContainer}>
        <Pressable onPress={() => router.push("/")}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>
        <SearchInputField onSubmit={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
