import { colors } from "@/constants";
import { Post } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface FeedItemProps {
  isLiked?: boolean;
  post: Post;
}

const FeedItem = ({ isLiked = false, post }: FeedItemProps) => {
  // post 가 undefined 일 경우 null 반환
  if (!post) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.authorContainer}>
          <Image
            source={
              post.author?.imageUri
                ? { uri: post.author.imageUri }
                : require("@/assets/images/profile_feedItem.png")
            }
            style={styles.profileImage}
          />
          <View style={{ flexDirection: "column", gap: 4 }}>
            <Text style={styles.author}>{post.author.nickname}</Text>
            <Text style={styles.createdAt}>
              {new Date(post.createdAt).toLocaleDateString("ko-KR", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </View>
        </View>
        <Feather name="more-vertical" size={24} color="black" />
      </View>
      <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
        {post.description}
      </Text>
      <View style={styles.menuContainer}>
        <Pressable style={styles.menu}>
          <Octicons
            name={isLiked ? "heart-fill" : "heart"}
            size={16}
            color={colors.ORANGE_600}
          />
          <Text style={isLiked ? styles.activeMenuText : styles.menuText}>
            {post.likes.length}
          </Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <Octicons name="comment" size={16} color={colors.ORANGE_600} />
          <Text style={styles.menuText}>{post.commentCount}</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <Octicons name="eye" size={16} color={colors.ORANGE_600} />
          <Text style={styles.menuText}>{post.viewCount}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    gap: 12,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
    paddingTop: 16,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "33%",
    gap: 8,
  },
  menuText: {
    color: "black",
  },
  activeMenuText: {
    color: colors.ORANGE_600,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_300,
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  createdAt: {
    fontSize: 12,
    color: colors.GRAY_500,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "black",
    lineHeight: 22,
  },
});
