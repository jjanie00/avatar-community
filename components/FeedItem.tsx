import { colors } from "@/constants";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FeedItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>header</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.description}>게시글 내용</Text>
      </View>
      <View style={styles.menuContainer}>
        <Pressable style={styles.menu}>
          <Text>menu</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <Text>menu</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <Text>menu</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    gap: 12,
  },
  headerContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  contentContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  description: {
    fontSize: 16,
    borderWidth: 1,
    color: "black",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
    borderWidth: 1,
  },
  menu: {},
});
