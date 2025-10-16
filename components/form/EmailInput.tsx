import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputWithLabel from "../InputField";

const EmailInput = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="email"
      control={control}
      render={({ field: { onChange, value } }) => (
        <InputWithLabel
          label="이메일"
          placeholder="이메일을 입력해주세요."
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          value={value}
          onChangeText={onChange}
        />
      )}
    />
  );
};

export default EmailInput;

const styles = StyleSheet.create({});
