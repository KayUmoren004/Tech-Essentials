import React from 'react'
import { Text, View } from 'react-native'
import {Feather as Icon} from "@expo/vector-icons"
import { RectButton } from 'react-native-gesture-handler'
interface CloseButtonProps {
    onPress: () => void
    
}

const SIZE = 60

 const CloseButton = ({onPress}: CloseButtonProps) => {
    return (
       <RectButton {...{onPress}}>
            <View style={{height:SIZE, width:SIZE, borderRadius: SIZE/2, backgroundColor:"#fff", justifyContent:"center", alignContent:"center" }}>
            <Text style={{color:"#121212", textAlign:"center"}}>
            <Icon name="x" size={45} />
            </Text>
        </View>
       </RectButton>
    )
}

export default CloseButton