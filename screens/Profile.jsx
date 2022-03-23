import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList } from "react-native";
import UserContext from "../context/User";
import fetchUsersActivities from "../api/fetchUsersActivities";

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
        <Text>Organised Activities</Text>
        <FlatList
          data={organised}
          renderItem={({ item }) => (
            <Text id={item.id}>
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
      {organisedActivities}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});
