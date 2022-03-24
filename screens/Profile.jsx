import React, { useContext } from "react";
import { ScrollView, Text, Button, Image, StyleSheet } from "react-native";
import UserContext from "../context/User";
import { ui, text } from "../theme";
import OrganisedActivitiesList from "../containers/OrganisedActivitiesList";

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <ScrollView style={ui.container}>
      <Text style={text.title}>Welcome Back {user.name}!</Text>
      <Image
        style={styles.avatar}
        source={{
          uri: user.avatar,
        }}
        accessibilityLabel="Profile Picture"
      />
      <Text style={text.body}>Rating: {user.rating}</Text>
      <Button
        title="Create New Activity"
        onPress={() => navigation.navigate("Create New Activity")}
      />
      <OrganisedActivitiesList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 25,
    resizeMode: "contain",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});
