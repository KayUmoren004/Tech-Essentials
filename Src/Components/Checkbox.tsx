import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';

interface CheckboxProps {
    label: string
}

const Checkbox = ({label}: CheckboxProps) => {
    const [ checked, setChecked ] = useState(false)
    return (
        <RectButton onPress = {() => setChecked((c) => ! c)}>
            <View style={{flexDirection:"row", }}>
            <View style = {{borderRadius: 5, backgroundColor: checked ? "green" : "white ", height: 20, width: 20}}>
                <Icon name="check" />
            </View>
            <Text>{label}</Text>
        </View>
        </RectButton>
    )
}

export default Checkbox

const styles = StyleSheet.create({})
