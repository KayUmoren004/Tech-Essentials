import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image, SafeAreaView } from 'react-native'
import * as Font from 'expo-font';

interface SlideProps {
    title: string;
    right?: boolean;
    picture: number;
} 

const fonts = {
    "SFProText-Bold": require("../assets/fonts/FontsFree-Net-SFProText-Bold.otf")
}

const {width, height} = Dimensions.get("window")

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
    container: {
        width,
        
    },
    title: {
        fontSize: 62,
        fontFamily:"SFProText-Bold",
        color:"#fff",
        textAlign:"center",
        lineHeight: 80
    },
    titleContainer: {
        height: 100,
        justifyContent:"center",
        
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",


    },
    picture: {
        width:width*0.20,
        height:height*0.15,
        alignSelf:"center",
        marginBottom:30
    },
})

const Slide = ({title, right, picture}: SlideProps) => {
    const [loaded] = Font.useFonts({
        "SFProText-Bold": require("../assets/fonts/FontsFree-Net-SFProText-Bold.ttf")
    })

    if(!loaded) {
        return null;
    }

    const transform = [
        {translateY: (SLIDE_HEIGHT - 100) / 2},
        {translateX:  right ? width /2 -70 : -width / 2 + 70},
        {rotate: right ? "-90deg" : "90deg" },
    ]
        return(
           <View style={styles.container}>
               <View style={styles.underlay}>
                    <Image source={picture} style={styles.picture} />
               </View>
               <View style={[styles.titleContainer, { transform }]}>
                   
                <Text style={styles.title}>{title}</Text>
               </View>
               
           </View>
        )
}

export default Slide;