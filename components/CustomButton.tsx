import { colors } from "@/constants";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

// PressableProps 를 상속받아 CustomButtonProps 에서 확장
interface CustomButtonProps extends PressableProps {
  label: string;
  size?: "medium" | "large";
  varient?: "filled"; // 버튼 스타일
}

export default function CustomButton({
  label,
  size = "large",
  varient = "filled",
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size],
        styles[varient],
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    width: "100%",
    height: 44,
  },
  medium: {},
  filled: {
    backgroundColor: colors.ORANGE_600,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.WHITE,
  },
  pressed: {
    opacity: 0.8,
  },
});
