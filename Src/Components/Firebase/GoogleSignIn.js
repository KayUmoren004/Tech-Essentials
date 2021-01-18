import React,{useState, createContext} from 'react'
import * as AppAuth from 'expo-app-auth';
const { URLSchemes } = AppAuth;
import { Text } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

export default GoogleSignIn = {
    initAsync = async () => {
        try {
            await GoogleSignIn.initAsync({
              clientId: '133112997665-8461uvv8g77cdhkeua9hji1vkeap7h8l.apps.googleusercontent.com',
            });
          } catch ({ message }) {
            alert('GoogleSignIn.initAsync(): ' + message);
          }
        this._syncUserWithStateAsync();
      },
    
      _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        this.setState({ user });
      },
    
      signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        this.setState({ user: null });
      },
    
      signInAsync = async () => {
        try {
          await GoogleSignIn.askForPlayServicesAsync();
          const { type, user } = await GoogleSignIn.signInAsync();
          if (type === 'success') {
            this._syncUserWithStateAsync();
          }
        } catch ({ message }) {
          alert('login: Error:' + message);
        }
      },
    
      onPress = () => {
        
          this.signOutAsync();
      },
    
}

