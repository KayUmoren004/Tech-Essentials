import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as Font from 'expo-font';

interface ButtonProps {
    variant: "default" | "primary";
    label: string;
    onPress: () => void;

}

const Button = ({variant, label, onPress}: ButtonProps) => {
    const [loaded] = Font.useFonts({
        "SFProText-Regular": require("../fonts/SFProText-Regular.ttf")
    })

    if(!loaded) {
        return null;
    }

    const backgroundColor = variant === "primary" ? "#f1ec40" : "#beecc4"
    const color = variant === "primary" ? "#121212" : "#121212"
    return (
        <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
                <Text style={[styles.label, {color}]}>{label}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent:'center',
        alignItems: "center",
        alignContent:"center",
        alignSelf:"center"
    },
    label: {
        fontSize: 15,
        fontFamily: "SFProText-Regular",
        textAlign:"center"
    }
})

Button.defaultProps = {variant: "default"}

export default Button;