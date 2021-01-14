import React, { PureComponent } from "react";
import { useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  StatusBar,
} from "react-native";

import Animated, { divide, multiply } from "react-native-reanimated";

import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT } from "./Slide";
const BORDER_RADIUS = 75;
import Subslide from "./Subslide";

interface Props {
  navigation: any;
}

const { width, height } = Dimensions.get("window");

const slides = [
  {
    title: "Personal Info",
    color: "#f1ec40",
    subtitle: "Enter Your Name and Phone Number",
    picture: require("../assets/icon.png")
  },
  {
    title: "Account",
    color: "#beecc4",
    subtitle: "Enter Your Email and a Secure Password",
    picture: require("../assets/icon.png")
  },
];
const SignUpScreen = () => {
  // const x = useValue(0);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  const scroll = useRef<Animated.ScrollView>(null);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.Slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
         

          {slides.map(({ subtitle }, index) => {
              const last = index === slides.length - 1;
            return (
                <Subslide
              key={index}
              onPress={() => {
                if (last) {
                    console.log("signup button works")
                } else{
                  scroll.current
                    ?.getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
              {...{ subtitle, last }}
            />
            )
        })}
        </Animated.View>
      </View>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    //alignItems: "center",
    //justifyContent: "center",
  },
  Slider: {
    height: SLIDE_HEIGHT,
    borderBottomEndRadius: BORDER_RADIUS,
    //backgroundColor: "#F1EC40",
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "#121212",
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: "row",
  },
  
});
export default SignUpScreen;
