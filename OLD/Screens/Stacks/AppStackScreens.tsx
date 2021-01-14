import React, { useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"

import {AuthStackScreens} from "./AuthStackScreens";
import MainStackScreen from "./MainStackScreen";
//import { User } from '@react-native-community/google-signin';
import { UserContext } from "../Context/UserContext"

export const AppStackScreens = () => {
    const AppStack = createStackNavigator()
    const [user] = useContext(UserContext)  
    return (
            <AppStack.Navigator headerMode="none">
                    <AppStack.Screen name="Auth" component={AuthStackScreens} />
               
                    <AppStack.Screen name="Main" component={MainStackScreen} />
               
               
            </AppStack.Navigator>
        )
    }
