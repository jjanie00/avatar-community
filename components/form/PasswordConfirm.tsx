import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputWithLabel from "../InputField";

const PasswordConfirm = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="passwordConfirm"
      control={control}
      render={({ field: { onChange, value } }) => (
        <InputWithLabel
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요."
          passwordRules="required: upper; required: lower; required: digit; minlength: 8 maxlength : 20"
          autoComplete="password"
          secureTextEntry={true}
          onChangeText={onChange}
          value={value}
        />
      )}
    />
  );
};

export default PasswordConfirm;

const styles = StyleSheet.create({});
