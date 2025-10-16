import FeedItem from "@/components/FeedItem";
import { Post } from "@/types";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

const dummyData: Post[] = [
  {
    id: 1,
    userId: 1,
    title: "맛있는 파스타 레시피 공유해요!",
    description:
      "집에서 쉽게 만들 수 있는 크림 파스타 레시피를 공유합니다. 정말 간단한데 맛있어요!",
    createdAt: "2024-01-15T10:30:00Z",
    author: {
      id: 1,
      nickname: "요리왕김치",
      imageUri: "https://via.placeholder.com/50",
    },
    imageUris: [
      { id: 1, uri: "https://via.placeholder.com/300x200" },
      { id: 2, uri: "https://via.placeholder.com/300x200" },
    ],
    likes: [{ userId: 2 }, { userId: 3 }, { userId: 4 }],
    hasVote: false,
    voteCount: 0,
    commentCount: 5,
    viewCount: 127,
  },
  {
    id: 2,
    userId: 2,
    title: "어떤 브랜드 커피가 더 맛있을까요?",
    description:
      "스타벅스 vs 이디야 vs 컴포즈커피 중에서 어떤 걸 선호하시나요?",
    createdAt: "2024-01-15T09:15:00Z",
    author: {
      id: 2,
      nickname: "커피러버",
      imageUri: "https://via.placeholder.com/50",
    },
    imageUris: [{ id: 3, uri: "https://via.placeholder.com/300x200" }],
    likes: [{ userId: 1 }, { userId: 5 }],
    hasVote: true,
    voteCount: 23,
    commentCount: 12,
    viewCount: 89,
    votes: [
      {
        id: 1,
        title: "어떤 브랜드 커피가 더 맛있을까요?",
        options: [
          {
            id: 1,
            displayPriority: 1,
            content: "스타벅스",
            userVotes: [
              { userId: 1 },
              { userId: 3 },
              { userId: 6 },
              { userId: 7 },
              { userId: 8 },
            ],
          },
          {
            id: 2,
            displayPriority: 2,
            content: "이디야",
            userVotes: [
              { userId: 2 },
              { userId: 4 },
              { userId: 9 },
              { userId: 10 },
            ],
          },
          {
            id: 3,
            displayPriority: 3,
            content: "컴포즈커피",
            userVotes: [
              { userId: 5 },
              { userId: 11 },
              { userId: 12 },
              { userId: 13 },
              { userId: 14 },
              { userId: 15 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    title: "오늘 점심 뭐 먹을까요?",
    description:
      "점심 메뉴 추천 부탁드려요! 근처에 맛있는 곳 있으면 알려주세요~",
    createdAt: "2024-01-15T08:45:00Z",
    author: {
      id: 3,
      nickname: "배고픈토끼",
      imageUri: "https://via.placeholder.com/50",
    },
    imageUris: [],
    likes: [{ userId: 1 }, { userId: 2 }, { userId: 4 }, { userId: 6 }],
    hasVote: false,
    voteCount: 0,
    commentCount: 8,
    viewCount: 156,
  },
  {
    id: 4,
    userId: 4,
    title: "새로운 디저트 카페 발견했어요!",
    description:
      "강남에 새로 생긴 디저트 카페인데 진짜 맛있어요. 특히 티라미수 추천!",
    createdAt: "2024-01-15T07:20:00Z",
    author: {
      id: 4,
      nickname: "디저트헌터",
      imageUri: "https://via.placeholder.com/50",
    },
    imageUris: [
      { id: 4, uri: "https://via.placeholder.com/300x200" },
      { id: 5, uri: "https://via.placeholder.com/300x200" },
      { id: 6, uri: "https://via.placeholder.com/300x200" },
    ],
    likes: [
      { userId: 1 },
      { userId: 2 },
      { userId: 3 },
      { userId: 5 },
      { userId: 7 },
      { userId: 8 },
    ],
    hasVote: false,
    voteCount: 0,
    commentCount: 15,
    viewCount: 203,
  },
  {
    id: 5,
    userId: 5,
    title: "집에서 만든 케이크 자랑",
    description:
      "첫 번째로 만든 생크림 케이크인데 생각보다 잘 나왔어요! 레시피도 공유할게요.",
    createdAt: "2024-01-14T16:30:00Z",
    author: {
      id: 5,
      nickname: "베이킹초보",
      imageUri: "https://via.placeholder.com/50",
    },
    imageUris: [{ id: 7, uri: "https://via.placeholder.com/300x200" }],
    likes: [
      { userId: 1 },
      { userId: 3 },
      { userId: 4 },
      { userId: 6 },
      { userId: 9 },
      { userId: 10 },
      { userId: 11 },
    ],
    hasVote: false,
    voteCount: 0,
    commentCount: 7,
    viewCount: 98,
  },
];

const FeedList = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      showsVerticalScrollIndicator={false} // 세로 스크롤바 숨김
    />
  );
};

export default FeedList;

const styles = StyleSheet.create({});
