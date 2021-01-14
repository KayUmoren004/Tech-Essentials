import React, { useState } from "react";
import { StyleSheet, Text, View, TextInputProps as RNTextInputProps } from "react-native";
import { TextInput as RNTextInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
interface TextInputProps extends RNTextInputProps{
  //placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
    const [input, setInput] = useState("")
  const [state, setState] = useState<InputState>(Pristine);
  const color =
    state === Pristine ? "#8a8d90" : state === Valid ? "green" : "red";
    const onChangeText = (text: string) => {
        setInput(text);
        if (state !== Pristine) 
        {
            validate()
        }
    }
    const validate = () => {
        const valid = validator(input);
        setState(valid)
    }
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        borderRadius: 10,
        borderColor: color,
        borderWidth:StyleSheet.hairlineWidth
      }}
    >
    <View style={{padding:10}}>
      <Icon name={icon} size={16} {...{color}} />
    </View>
     <View style={{flex:1}}>
     <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#d8d8d8"
        onBlur = {validate}
        {...{onChangeText}}
        {...props}
        //style={{ color: "#fff" }}
      />
     </View>
      {(state === Valid || state === Invalid) && (
        <View style={{ borderRadius: 10, height: 20, width: 20, justifyContent:"center", alignItems:"center", backgroundColor:state === Valid ? "green" : "red", marginRight: 10}}>
          <Icon name={state === Valid ? "check" : "x"} color="white" size={16} />
        </View>
      )}
    </View>
  );
};

interface TextInputProps {}

export default TextInput;

const styles = StyleSheet.create({});
