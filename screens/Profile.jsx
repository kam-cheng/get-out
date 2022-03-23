import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList } from "react-native";
import UserContext from "../context/User";
import fetchDocuments from "../api/fetchDocuments";
import { ui, text } from "../theme";

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const [organised, setOrganised] = useState(null);

  const queryparams = {
    setState: setOrganised,
    query: "==",
    collection: "Activities",
    key: "Organiser",
    value: user.name,
  };

  useEffect(() => {
    fetchDocuments(queryparams);
  }, []);
  let organisedActivities;

  if (organised !== null) {
    organisedActivities = (
      <>
        <Text style={text.subtitle}>Organised Activities</Text>
        <FlatList
          data={organised}
          keyExtractor={(item) => item.id}
          extraData={organised}
          renderItem={({ item }) => (
            <Text style={text.body}>
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
      <Text style={text.body}>Rating: {user.rating}</Text>
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
