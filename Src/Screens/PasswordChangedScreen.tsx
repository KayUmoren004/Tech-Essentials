import React from "react";
import { Text, View } from "react-native";
import Container from "../Components/Container";
import CloseButton from "../Components/CloseButton";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface PasswordChangedScreenProps {
  navigation: any;
}

const SIZE = 80;

const PasswordChangedScreen = ({ navigation }: PasswordChangedScreenProps) => {
  return (
    <Container
      footer={
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CloseButton onPress={() => navigation.pop()} />
        </View>
      }
    >
      <View
        style={{
          padding: 35,
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: SIZE,
            width: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor: "rgba(18, 18, 18, 0.1)",
            justifyContent: "center",
            alignItems:"center",
            marginBottom: 25
          }}
        >
          <Text
            style={{
              fontWeight:"900",
              textAlign: "center",
              color: "#121212",
            }}
          >
            <Icon name="check" size={50} />
          </Text>
        </View>
        <Text
          style={{
            color: "#121212",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
            //marginBottom: 25,
          }}
        >
          Forgot password?
        </Text>
        <Text
          style={{
            marginTop: 25,
            marginBottom: 25,
            color: "#121212",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "200",
            fontSize: 15,
          }}
        >
          Enter the email address associated with your account
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("LogIn")}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              //alignItems: "center",
              justifyContent: "center",
              borderRadius: 24,
              backgroundColor: "#121212",
              height: 48,
              width: 150,
              //alignContent:"center"
              //marginHorizontal: 32,
              //marginVertical: 0,
            }}
          >
            <Text style={{ color: "#f1ec60", textAlign: "center" }}>
              Reset password
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default PasswordChangedScreen;
