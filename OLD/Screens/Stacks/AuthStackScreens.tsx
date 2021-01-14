import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../LogInScreen"
import SignUpScreen from "../SignUpScreen"

export const AuthStackScreens = () => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
            <AuthStack.Screen name="SignIn" component={LoginScreen} />
        </AuthStack.Navigator>
    )
}