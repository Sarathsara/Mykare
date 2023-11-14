import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000);
    }, [])
    // const getdata = async () => {
    //     const email = await AsyncStorage.getItem('EMAIL');
    //     if (email !== '' || email !== null || email !== undefined){
    //         navigation.navigate('Home')
    //     }
    // else{
    //     navigation.navigate('Login')

    // }
    // }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../images/playstore.png')} style={{ width: "100%", height: "100%" }} />
        </View>
    )
}
export default Splash;