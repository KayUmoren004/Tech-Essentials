import React, {useContext} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Animated from 'react-native-reanimated'
import * as Font from 'expo-font';

interface SubslideProps {
    subtitle: string;
    last?: boolean;
    onPress: () => void;
} 
const { width, height } = Dimensions.get("window");

import Button from "../assets/components/Button"


const fonts = {
    "SFProText-SemiBold": require("../assets/fonts/FontsFree-Net-SFProText-Semibold.ttf")
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        //alignItems:'center',
        padding: 44,
        marginBottom: 12,
        alignItems: 'stretch'

        //width,
    },
    subtitle: {
        color: "#f1ec40",
        fontFamily: "SFProText-SemiBold",
        fontSize: 24,
        textAlign:'center',
        lineHeight: 30,

    },
    AuthView: {
        //alignItems:"flex-start"
      },
      Auth_Text: {
        color: "#fff",
        fontSize: 12,
        textTransform: "uppercase",
        fontWeight: "300",
      },
      Auth_Container: {
        marginBottom: 12,
      },
      Auth_Field: {
        borderBottomColor: "#fff",
        borderBottomWidth: 0.5,
        height: 48,
        width: "100%"
      },
})

const Subslide = ({subtitle, last, onPress}: SubslideProps) => {
    const [loaded] = Font.useFonts({
        "SFProText-SemiBold": require("../assets/fonts/FontsFree-Net-SFProText-Semibold.ttf")
    })

    if(!loaded) {
        return null;
    }
    const navigation = useNavigation();
    

    return (
       <View style={styles.container}>
            <Text style = {styles.subtitle}>{subtitle}</Text>
            <View style={styles.AuthView}>
                <View style={styles.Auth_Container}>
                  <Text style={styles.Auth_Text}>Email</Text>
                  <TextInput
                    style={styles.Auth_Field}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    autoFocus={true}
                    keyboardType="email-address"
                    /*onChangeText={(email) =>
                      this.setState({
                        email: email,
                      })
                    }
                    value={this.state.email}*/
                  />
                </View>

                <View style={styles.Auth_Container}>
                  <Text style={styles.Auth_Text}>Password</Text>
                  <TextInput
                    style={styles.Auth_Field}
                    autoCapitalize="none"
                    autoCompleteType="password"
                    autoCorrect={false}
                    secureTextEntry={true}
                    /*onChangeText={(password) =>
                      this.setState({
                        password: password,
                      })
                    }
                    value={this.state.password}*/
                  />
                </View>
            </View>
            <Button
                label={last ? "Sign Up" : "Next"} 
                variant = {last ? "primary" : "default"} 
                {...{onPress}}    
            />
            <TouchableOpacity onPress = {() => navigation.navigate("SignIn")}>
                <Text style={{color: "#fff", marginTop: 10, alignContent:"center",
        alignSelf:"center"}}>
                    Have an Account Already?{" "}
                        <Text>
                            Log In
                        </Text>
                </Text>
            </TouchableOpacity>
       </View>
    )
}

export default Subslide
