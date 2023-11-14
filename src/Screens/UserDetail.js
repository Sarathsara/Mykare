import React from 'react';
import { Text, View, FlatList } from 'react-native';

const UserDetail = ({ route }) => {
  const { usersData } = route.params;

  return (
    <View>
      <Text style={{color:'gray'}}>Welcome to User List</Text>
      <FlatList
        data={usersData}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <View>
            <Text style={{color:'gray'}}>Name: {item.name}</Text>
            <Text style={{color:'gray'}}>Email: {item.email}</Text>
            <Text style={{color:'gray'}}>Email: {item.mobile}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserDetail;
