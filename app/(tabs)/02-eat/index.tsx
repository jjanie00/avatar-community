import { Link } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function EatFoodScreen() {
  return (
    <View style={styles.container}>
      <Link href={"/(tabs)/02-eat/log"} style={styles.link}>
        <Text>Log 화면 이동</Text>
      </Link>
      <Image
        source={require("@/assets/images/munchie.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  image: {
    width: width * 0.75,
    height: height * 0.5,
  },
});
