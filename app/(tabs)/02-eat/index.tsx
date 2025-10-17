import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function EatFoodScreen() {
  const [imageLayout, setImageLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const startedOutside = useRef(false);

  // 이미지 레이아웃이 설정되었는지 확인
  const isImageReady = () => {
    return imageLayout.width > 0 && imageLayout.height > 0;
  };

  // 현재 터치한 좌표가 이미지 내부에 있는지 확인
  const isInsideImage = (x: number, y: number) => {
    return (
      x >= imageLayout.x &&
      x <= imageLayout.x + imageLayout.width &&
      y >= imageLayout.y &&
      y <= imageLayout.y + imageLayout.height
    );
  };

  const dragGesture = Gesture.Pan()
    // 이미지 레이아웃 설정 이전 드래그 비활성화
    .enabled(isImageReady())
    .onStart((e) => {
      // const outside = !isInsideImage(e.absoluteX, e.absoluteY);
      // startedOutside.current = outside; // true, false
      console.log("start", e);
    });
  // .onUpdate((e) => {
  //   if (startedOutside.current && isInsideImage(e.absoluteX, e.absoluteY)) {
  //     console.log("drag");
  //     startedOutside.current = false; // 중복 로그 방지
  //   }
  // })
  // .onEnd((e) => {
  //   // 초기화
  //   startedOutside.current = false;
  //   console.log("end");
  // });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={dragGesture}>
        <View style={styles.container}>
          <Link href={"/(tabs)/02-eat/log"} style={styles.link}>
            <Text>Log 화면 이동</Text>
          </Link>
          <Image
            source={require("@/assets/images/munchie.png")}
            style={styles.image}
            onLayout={(event) => {
              // x, y : 왼쪽 상단 모서리 좌표
              // width, height : 이미지 크기
              const { x, y, width, height } = event.nativeEvent.layout;
              setImageLayout({ x, y, width, height });
            }}
          />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  image: {
    width: width * 0.75,
    height: height * 0.5,
  },
});
