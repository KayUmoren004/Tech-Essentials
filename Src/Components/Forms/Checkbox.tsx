import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  //);
  const color = checked ? "green" : "white";
  return (
    <TouchableOpacity onPress={() => onChange()} style={{justifyContent:"center"}}>
      <View style={{ flexDirection: "row", alignItems: "center", height: 50 }}>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: color,
            height: 20,
            width: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Icon name="check" color="white" />
        </View>
        <Text style={{ color: "#121212", marginLeft: 15 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
