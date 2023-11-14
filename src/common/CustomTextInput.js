import React, { useState } from "react";
import { Image, Text, View, TextInput } from "react-native";
const CustomTextInput = ({ value, onChangeText, placeholder, icon,style, type, keyboardType,placeholderTextColor,textColor }) => {
    const [text, settext] = useState(value)
    return (
        <View style={{ width: "85%", height: 50, borderWidth: 1, borderRadius: 10, alignSelf: 'center', marginTop: 30, flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingRight: 20 }}>
            <Image source={icon} style={{ width: 26, height: 26 }} />
            <TextInput value={value}
                keyboardType={keyboardType ? keyboardType : "default"}
                onChangeText={(txt) => {
                    onChangeText(txt)
                }}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={type ? true : false}
                style={[{ flex: 1, paddingVertical: 10, color: textColor }, style]}/>
        </View>
    )
}
export default CustomTextInput;