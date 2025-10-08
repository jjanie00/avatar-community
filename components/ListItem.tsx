import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ListItemProps {
  title: string;
  subtitle?: string;
  image?: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
  showChevron?: boolean;
}

export default function ListItem({
  title,
  subtitle,
  image,
  onPress,
  rightElement,
  showChevron = false,
}: ListItemProps) {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      style={styles.container}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      <View style={styles.rightContainer}>
        {rightElement}
        {showChevron && <Text style={styles.chevron}>›</Text>}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: "#F0F0F0",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  chevron: {
    fontSize: 18,
    color: "#CCC",
    marginLeft: 8,
  },
});
