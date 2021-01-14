import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Container from "../Components/Container";
import SocialLogin from "../Components/SocialLogin";
import TextInput from "../Components/Forms/TextInput";
import Checkbox from "../Components/Checkbox";

const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const passwordValidator = (password: string) => password.length >= 6;

const LogInScreen = () => {
  const footer = (
    <>
      <SocialLogin />
    </>
  );
  return (
    <Container {...{ footer }}>
      <View style={{ padding: 35 }}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 25,
          }}
        >
          Welcome back
        </Text>
        <Text
          style={{
            marginBottom: 25,
            color: "#fff",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "200",
            fontSize: 15,
          }}
        >
          Use your credentials below and login to your account
        </Text>
        <View style={{marginBottom: 15}}>
        <TextInput
                icon="mail"
                placeholder="Enter your Email"
                validator={emailValidator}
        />
        </View>
        <TextInput
          icon="lock"
          placeholder="Enter your Password"
          validator={passwordValidator}
        />
        <View style={{flexDirection:"row", judtifyContenet: "space-between"}}>
            <Checkbox label = "Remember me" />
            <TouchableOpacity onPress={() => true}>
                <Text style={{color: "skyblue"}} >Forgot Password?</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});
