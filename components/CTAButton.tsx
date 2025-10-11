import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomButton from "./CustomButton";

interface CTAButtonProps {
  label: string;
}

const CTAButton = ({ label }: CTAButtonProps) => {
  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.buttonContainer, { paddingBottom: inset.bottom }]}>
      <CustomButton label={label} />
    </View>
  );
};

export default CTAButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    width: "100%",
  },
});
