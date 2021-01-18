import React, {useContext} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"

import AuthStackScreens from "./AuthStackScreens"
import MainStackScreens from "./MainStackScreen"
import LoadingScreen from "../Components/Firebase/LoadingScreen"

import {UserContext} from "../Components/Firebase/UserContext";

const AppStackScreens = () => {
    const AppStack = createStackNavigator();
    const [user] = useContext(UserContext)

    return (
        <AppStack.Navigator headerMode="none">
           {user.isLoggedIn === null ? (
            <AppStack.Screen name="Loading" component={LoadingScreen} />
           ) : user.isLoggedIn ? (
            <AppStack.Screen name="Main" component={MainStackScreens} />
           ) : (
            <AppStack.Screen name="Auth" component={AuthStackScreens} />
           )}
        </AppStack.Navigator>
  )
}

export default AppStackScreens

const styles = StyleSheet.create({})


/*
return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name = "AuthStack" component={AuthStackScreens} />
            <AppStack.Screen name = "MainStack" component={MainStackScreens} />
        </AppStack.Navigator>
    )
*/