import React, { useContext } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import UserContext from "../context/User";

export default function ProfileScreen({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  // React Context for User {username, avatar, rating, verified}

  // Display list of activities organised matching the user

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome Back!</Text>
      <Image
        style={styles.logo}
        source={{
          uri: user.avatar,
        }}
      />
      <Text>{user.name}</Text>
      <Text>Rating: {user.rating}</Text>
      <Button
        title="Create New Activity"
        onPress={() => navigation.navigate("Create New Activity")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});
