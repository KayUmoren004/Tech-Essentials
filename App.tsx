import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import AppStackScreens from "./Src/Stacks/AppStackScreens"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {UserProvider} from "./Src/Components/Firebase/UserContext"
import {FirebaseProvider} from "./Src/Components/Firebase/FirebaseContext"



export default function App() {
  return (
    <FirebaseProvider>
      <UserProvider>
      <SafeAreaProvider>
      <NavigationContainer>
        <AppStackScreens />
    </NavigationContainer>
    </SafeAreaProvider>
      </UserProvider>
    </FirebaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
