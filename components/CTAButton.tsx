import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomButton from "./CustomButton";

interface CTAButtonProps {
  label: string;
  onPress: () => void; // void : 아무것도 반환하지 않음
}

const CTAButton = ({ label, onPress }: CTAButtonProps) => {
  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.buttonContainer, { paddingBottom: inset.bottom }]}>
      <CustomButton label={label} onPress={onPress} />
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
