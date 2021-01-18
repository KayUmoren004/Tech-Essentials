import React, { VoidFunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SocialLogin from "./SocialLogin";

interface FooterProps {
  onPress: () => VoidFunctionComponent;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
          marginBottom: 20,
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#fff" }}>{`${title}`} </Text>
        <TouchableOpacity {...{ onPress }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "skyblue",
            }}
          >
            {action}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({});
