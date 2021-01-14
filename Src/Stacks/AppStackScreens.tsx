import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"

import AuthStackScreens from "./AuthStackScreens"
import MainStackScreens from "./MainStackScreen"

const AppStackScreens = () => {
    const AppStack = createStackNavigator()
    return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name = "AuthStack" component={AuthStackScreens} />
            <AppStack.Screen name = "MainStack" component={MainStackScreens} />
        </AppStack.Navigator>
    )
}

export default AppStackScreens

const styles = StyleSheet.create({})
