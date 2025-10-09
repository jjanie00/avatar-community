import { colors } from "@/constants";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputWithLabelProps extends TextInputProps {
  label?: string;
  varient?: "filled" | "standard" | "outlined";
}

export default function InputWithLabel({
  label,
  varient = "filled",
  ...props
}: InputWithLabelProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, styles[varient]]}>
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.GRAY_700,
    fontSize: 12,
    lineHeight: 24,
    marginBottom: 5,
  },
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  filled: {
    backgroundColor: colors.GRAY_100,
  },
  standard: {},
  outlined: {},
  input: {
    fontSize: 14,
    // TextInput 이 남은 공간을 모두 차지
    flex: 1,
    // TextInput 기본 내부 패딩 제거
    padding: 0,
  },
});
