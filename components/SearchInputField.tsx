import { colors } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface SearchInputFieldProps extends TextInputProps {
  readOnly?: boolean;
  onSubmit?: (text: string) => void;
}

const SearchInputField = ({ onSubmit, ...props }: SearchInputFieldProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(input);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setInput}
        onSubmitEditing={handleSubmit}
        placeholder="글 제목 검색"
        placeholderTextColor="#B6B6B6"
        style={styles.input}
        {...props}
      />
      <Ionicons
        name="search"
        size={24}
        color="#B6B6B6"
        style={styles.searchIcon}
      />
    </View>
  );
};

export default SearchInputField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 12,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: colors.GRAY_100,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  searchIcon: {
    marginLeft: 8,
    justifyContent: "flex-end",
  },
});
