import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import CustomTextInput from "./common/CustomTextInput";
import CommenButton from "./common/CommenButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const login = async () => {
    if (email === "") {
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password === "") {
        setBadPassword(true);
      } else {
        setBadPassword(false);
        checkCredentials();
      }
    }
  };

  const checkCredentials = async () => {
    try {
      const usersDataString = await AsyncStorage.getItem("USERS_DATA");

      if (usersDataString) {
        const usersData = JSON.parse(usersDataString);

        // Instead of checking for a specific email and password, navigate to Home directly
        navigation.navigate("Home", { usersData });
      } else {
        alert("No user data found. Please sign up.");
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  };
  
  

  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../src/images/playstore.png")} style={{ height: 80, width: 80, alignSelf: "center", marginTop: 100, borderRadius: 30 }} />
      <Text style={{ marginTop: 50, alignSelf: "center", fontSize: 24, color: "#000", fontWeight: "600" }}>
        Login
      </Text>
      <CustomTextInput
  placeholder={"Enter Email Id"}
  style={{ color: "black" }} 
  placeholderTextColor="#828285"  
  icon={require("../src/images/email.png")}
  value={email}
  onChangeText={(txt) => {
    setEmail(txt);
  }}
/>
      {badEmail === true && <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>Please Enter Email Id</Text>}
      <CustomTextInput
  type={"password"}
  style={{ color: "black" }}
  placeholderTextColor="#828285"  // Set the placeholder text color to gray
  placeholder={"Password"}
  icon={require("../src/images/lock.png")}
  value={password}
  onChangeText={(txt) => {
    setPassword(txt);
  }}
/>
      {badPassword === true && <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>Please Enter Password</Text>}
      <CommenButton title={"Login"} bgcolor={"#000"} textcolor={"#fff"} onPress={() => login()} />
      <Text style={{color:"gray", fontSize: 18, fontWeight: "800", alignSelf: "center", marginTop: 20 }} onPress={() => navigation.navigate("SignUp")}>
        Create New Account
      </Text>
    </View>
  );
};

export default Login;
