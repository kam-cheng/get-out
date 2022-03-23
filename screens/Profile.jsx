import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList } from "react-native";
import UserContext from "../context/User";
import fetchUsersActivities from "../api/fetchUsersActivities";
import { ui, text } from "../theme";

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const [organised, setOrganised] = useState(null);

  // Display list of activities organised matching the user

  useEffect(() => {
    fetchUsersActivities(user.name).then((activities) => {
      setOrganised(activities);
    });
  }, []);

  let organisedActivities;

  if (organised !== null) {
    organisedActivities = (
      <>
        <Text style={text.subtitle}>Organised Activities</Text>
        <FlatList
          data={organised}
          renderItem={({ item }) => (
            <Text id={item.id} style={text.body}>
              {`Image: ${item.Image}
          Activity: ${item.Activity}
           Date: ${item.Date}`}
            </Text>
          )}
        />
      </>
    );
  }

  return (
    <View
      style={
        (ui.container,
        { flex: 1, alignItems: "center", justifyContent: "center" })
      }
    >
      <Text style={text.title}>Welcome Back {user.name}!</Text>
      <Image
        style={styles.avatar}
        source={{
          uri: user.avatar,
        }}
        accessibilityLabel="Profile Picture"
      />
      <Text>Rating: {user.rating}</Text>
      <Button
        title="Create New Activity"
        onPress={() => navigation.navigate("Create New Activity")}
      />
      {organisedActivities}
    </View>
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
