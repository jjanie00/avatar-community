import CustomButton from "@/components/CustomButton";
import InputWithLabel from "@/components/InputField";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <InputWithLabel
        label="이메일"
        placeholder="이메일을 입력해주세요."
        keyboardType="email-address" // 이메일 키보드 표시 (@, com)
        autoComplete="email" // 이전에 입력한 이메일 자동 완성
        textContentType="emailAddress" // 시스템에 필드 데이터 전달 (ios)
      />
      <InputWithLabel
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        passwordRules="required: upper; required: lower; required: digit; minlength: 8 maxlength : 20"
        textContentType="password" // 시스템에 필드 데이터 전달 (ios)
        secureTextEntry={true}
      />
      <CustomButton label={"로그인하기"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
