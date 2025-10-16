import CTAButton from "@/components/CTAButton";
import EmailInput from "@/components/form/EmailInput";
import PasswordInput from "@/components/form/PasswordInput";
import { colors } from "@/constants";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <>
      <FormProvider {...loginForm}>
        <View style={styles.container}>
          <EmailInput />
          <PasswordInput />
        </View>
        <CTAButton
          label="로그인하기"
          onPress={loginForm.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
    paddingTop: 12,
    paddingBottom: 50, // figma(34), 하단 여백 부족으로 수정
    paddingHorizontal: 16,
  },
});
