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

const {width, height: wheight} = Dimensions.get("window")
const aspectRatio = 200 / 300;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ backgroundColor: "#fff" }}>
        <View style={styles.ImageView}>
          <View
            
            style={{ width, height, borderTopLeftRadius: 75, backgroundColor:"#f1ec40" }}
          />
        </View>
      </View>

      <View style={styles.overlay}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
            backgroundColor:"#f1ec40"
          }}
        />
        <View style={styles.ContentContainer}>
          {children}
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
    </KeyboardAwareScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    height: wheight
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
