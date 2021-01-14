import React, { forwardRef, RefObject, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { TextInput as RNTextInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps {
  //placeholder: string;
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const color = !touched ? "darkgrey" : error ? "red" : "green";

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 48,
          borderRadius: 10,
          borderColor: color,
          borderWidth: StyleSheet.hairlineWidth,
        }}
      >
        <View style={{ padding: 10 }}>
          <Icon name={icon} size={16} {...{ color }} />
        </View>
        <View style={{ flex: 1 }}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#d8d8d8"
            {...{ ref }}
            {...props}
            style={{ color: "#121212" }}
          />
        </View>
        {touched && (
          <View
            style={{
              borderRadius: 12.5,
              height: 10 * 2.5,
              width: 10 * 2.5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: !error ? "green" : "red",
              marginRight: 10,
            }}
          >
            <Icon
              name={!error ? "check" : "x"}
              color="white"
              size={16}
              style={{ textAlign: "center" }}
            />
          </View>
        )}
      </View>
    );
  }
);

interface TextInputProps {}

export default TextInput;

const styles = StyleSheet.create({});
