import React, { useState, useEffect } from "react";
import { Image, Text, View, TextInput, ScrollView } from "react-native";
import CustomTextInput from "../common/CustomTextInput";
import CommenButton from "../common/CommenButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [existingUsers, setExistingUsers] = useState([]);

  useEffect(() => {
    // Fetch existing users from AsyncStorage
    const fetchExistingUsers = async () => {
      try {
        const storedUsers = await AsyncStorage.getItem("USERS_DATA");
        if (storedUsers) {
          setExistingUsers(JSON.parse(storedUsers));
        }
      } catch (error) {
        console.error("Error fetching existing users:", error);
      }
    };

    fetchExistingUsers();
  }, []);

  const signupp = () => {
    setButtonDisabled(true);

    if (name === "") {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email === "") {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile === "") {
          setBadMobile(true);
        } else if (mobile.length < 10) {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password === "") {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword === "") {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
              } else {
                setBadConfirmPassword(false);
                checkDuplicateUser();
              }
            }
          }
        }
      }
    }
  };

  const checkDuplicateUser = () => {
    // Check for duplicate user based on name, email, and mobile
    const isDuplicate = existingUsers.some(
      (user) => user.name === name || user.email === email || user.mobile === mobile
    );

    if (isDuplicate) {
      Alert.alert(
        "Error",
        "User with the same name, email, or mobile number already exists. Please use different credentials."
      );
      setButtonDisabled(false);
    } else {
      saveData();
    }
  };

  const saveData = async () => {
    try {
      // Retrieve existing user data from AsyncStorage
      const existingUsersString = await AsyncStorage.getItem("USERS_DATA");
      const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];
  
      // Create a new user object
      const newUser = { name, email, mobile, password };
  
      // Add the new user to the existing array of users
      const updatedUsers = [...existingUsers, newUser];
  
      // Save the updated user data back to AsyncStorage
      await AsyncStorage.setItem("USERS_DATA", JSON.stringify(updatedUsers));
  
      console.log("User data saved successfully");
      navigation.goBack();
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../src/images/playstore.png")}
          style={{ height: 80, width: 80, alignSelf: "center", marginTop: 50, borderRadius: 30 }}
        />
        <Text style={{ marginTop: 50, alignSelf: "center", fontSize: 24, color: "#000", fontWeight: "600" }}>
          Create New Account
        </Text>
        <CustomTextInput
          placeholder={"Enter Name"}
          style={{ color: "black" }}  
          placeholderTextColor="#828285" 
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
          icon={require("../../src/images/user.png")}
        />
        {badName === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>Please Enter Name</Text>
        )}
        <CustomTextInput
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
          placeholder={"Enter Email Id"}
          style={{ color: "black" }}  
          placeholderTextColor="#828285" 
          icon={require("../../src/images/email.png")}
        />
        {badEmail === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>Please Enter Email Id</Text>
        )}
        <CustomTextInput
          value={mobile}
          keyboardType={"number-pad"}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
          placeholder={"Enter Mobile Number"}
          style={{ color: "black" }}  
          placeholderTextColor="#828285" 
          icon={require("../../src/images/mobile.png")}
        />
        {badMobile === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter valid mobile no
          </Text>
        )}
        <CustomTextInput
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
          placeholder={"Enter Password"}
          style={{ color: "black" }}  
          placeholderTextColor="#828285" 
          icon={require("../../src/images/lock.png")}
        />
        {badPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>Please Enter password</Text>
        )}
        <CustomTextInput
          value={confirmPassword}
          onChangeText={(txt) => {
            setConfirmPassword(txt);
          }}
          placeholder={"Enter confirm Password"}
          style={{ color: "black" }}  
          placeholderTextColor="#828285" 
          icon={require("../../src/images/lock.png")}
        />
        {badConfirmPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Correct Password
          </Text>
        )}
        <CommenButton
          title={"Sign up"}
          bgcolor={buttonDisabled ? "#8e8e8e" : "#000"}
          textcolor={"#fff"}
          onPress={() => {
            signupp();
          }}
          disbled={buttonDisabled}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 50,
            color:'gray'
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          {" "}
          Already have an account
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
