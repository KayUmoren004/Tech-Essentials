import React, { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const assets = [
  require("../Assets/tumblr_oiwyt1WJwH1tf8vylo1_1280.png"),
];
const { width } = Dimensions.get("window");
const aspectRatio = 200 / 300;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ backgroundColor: "#fff" }}>
        <View style={styles.ImageView}>
          <Image
            source={assets[0]}
            style={{ width, height }}
            borderTopLeftRadius={75}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.overlay}>
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <View style={styles.ContentContainer}>
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#121212",
          paddingBottom: insets.bottom,
          paddingTop: 15,
        }}
      >
        {footer}
      </View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  ImageView: {
    borderBottomLeftRadius: 75,
    overflow: "hidden",
    height: height * 0.61,
  },
  overlay: {
    flex: 1,
    overflow: "hidden",
  },
  ContentContainer: {
    flex: 1,
    borderRadius: 75,
    borderTopLeftRadius: 0,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
});

/*
    background-color: #f1ec40;
background-image: linear-gradient(208deg, #f1ec40 0%, #beecc4 46%, #121212 100%);


*/