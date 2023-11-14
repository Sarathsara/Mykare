import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = ({ route }) => {
    const navigation = useNavigation();
    const { usersData } = route.params;

    const user = () => {
        navigation.navigate('UserDetail', { usersData });
    };
    const Logout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
            <Text style={{color:"gray"}}>Welcome</Text>
            <TouchableOpacity onPress={user} style={{marginTop:20,borderWidth:1,borderColor:"#000",backgroundColor:"#000",padding:10,borderRadius:10}}>
                <Text style={{color:'#fff'}}>UserDetail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Logout} style={{marginTop:20,borderWidth:1,borderColor:"#000",backgroundColor:"#000",padding:10,borderRadius:10}}>
                <Text style={{color:'#fff'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
