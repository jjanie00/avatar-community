import { colors } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchInputField = ({ ...props }) => {
  // todo :: SearchInput 구조 파악하기, 나중에 더 빠르게 마크업 구현할 수 있게 
  return (
    <View style={styles.container}>
      <TextInput
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
    flex: 1, // 부모 컨테이너의 남은 공간을 모두 차지
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
    padding: 0, // TextInput 내부 패딩 제거
  },
  searchIcon: {
    marginLeft: 8,
    justifyContent: "flex-end",
  },
});
