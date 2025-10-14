import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FeedItem = () => {
  return (
    <View style={styles.container}>
      <Text>FeedItem</Text>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
  },
});
