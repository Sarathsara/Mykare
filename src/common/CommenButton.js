import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CommenButton = ({ onPress, title, bgcolor, textcolor,disbled}) => {
    return (
        <TouchableOpacity
        disabled={disbled}
            style={{
                backgroundColor: bgcolor,
                justifyContent: "center",
                alignContent: "center",
                width: "85%",
                height: 50,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 50
            }} 
            onPress={() => {
                onPress();
            }}>
            <Text style={{ color: textcolor, alignSelf: 'center' }}>{title}</Text>
        </TouchableOpacity>
    );
}

export default CommenButton;
