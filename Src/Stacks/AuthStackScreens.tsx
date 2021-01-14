import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import SignUpScreen from "../Screens/SignUpScreen";
import LogInScreen from "../Screens/LogInScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";

const AuthStackScreens = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AuthStack.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      options={{
        animationEnabled: false,
      }}
    />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;

const styles = StyleSheet.create({});
