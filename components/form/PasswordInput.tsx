import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputWithLabel from "../InputField";

const PasswordInput = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="password"
      control={control}
      render={({ field: { onChange, value } }) => (
        <InputWithLabel
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          passwordRules="required: upper; required: lower; required: digit; minlength: 8 maxlength : 20"
          autoComplete="password" // 자동완성 제안 힌트 제공, 시스템에 필드 데이터 전달 (ios)
          secureTextEntry={true}
          value={value}
          onChangeText={onChange}
        />
      )}
    />
  );
};

export default PasswordInput;

const styles = StyleSheet.create({});
