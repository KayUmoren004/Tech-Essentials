import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {AppStackScreens} from './Screens/Stacks/AppStackScreens';
import auth from '@react-native-firebase/auth';


export default function App() {
  return (
    <NavigationContainer>
      <AppStackScreens />
    </NavigationContainer>
  );
}