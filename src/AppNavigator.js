import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Screens/Splash";
import Login from "./Login";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";
import UserDetail from "./Screens/UserDetail";
const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="UserDetail" component={UserDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;