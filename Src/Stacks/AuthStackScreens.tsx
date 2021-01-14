import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import SignUpScreen from "../Screens/SignUpScreen"
import LogInScreen from "../Screens/LogInScreen"
import { createStackNavigator } from '@react-navigation/stack'

const AuthStackScreens = () => {
    const AuthStack = createStackNavigator()
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name = "LogIn" component={LogInScreen} />
            <AuthStack.Screen name = "SignUp" component={SignUpScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthStackScreens

const styles = StyleSheet.create({})
