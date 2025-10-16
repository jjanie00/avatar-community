import CTAButton from "@/components/CTAButton";
import EmailInput from "@/components/form/EmailInput";
import PasswordConfirm from "@/components/form/PasswordConfirm";
import PasswordInput from "@/components/form/PasswordInput";
import { FormValues } from "@/types";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

export default function SignupScreen() {
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
        <PasswordConfirm />
      </View>
      <CTAButton
        label="회원가입하기"
        onPress={signupForm.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
