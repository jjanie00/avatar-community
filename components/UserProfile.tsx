import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

interface UserProfileProps {
  user: User;
  onEditPress?: () => void;
  onMessagePress?: () => void;
}

export default function UserProfile({
  user,
  onEditPress,
  onMessagePress,
}: UserProfileProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: user.avatar || "https://via.placeholder.com/100" }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        {user.bio && <Text style={styles.bio}>{user.bio}</Text>}
      </View>

      <View style={styles.buttonContainer}>
        {onEditPress && (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={onEditPress}
          >
            <Text style={styles.editButtonText}>편집</Text>
          </TouchableOpacity>
        )}
        {onMessagePress && (
          <TouchableOpacity
            style={[styles.button, styles.messageButton]}
            onPress={onMessagePress}
          >
            <Text style={styles.messageButtonText}>메시지</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E9ECEF",
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#007AFF",
  },
  messageButton: {
    backgroundColor: "#34C759",
  },
  editButtonText: {
    color: "#FFF",
    fontWeight: "600",
  },
  messageButtonText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
