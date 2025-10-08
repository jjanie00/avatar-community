// 버튼 누르면 로그인 페이지로 이동
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.authActionsContainer}>
        <CustomButton label="로그인하기" />
        <Link href={"/signup"} style={styles.signupText}>
          이메일로 가입하기
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  logo: {
    width: 112,
    height: 112,
  },
  authActionsContainer: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 32,
  },
  signupText: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
