import * as React from "react";
import { View, Text, Button, Alert } from "react-native";
import SingleActivity from "../containers/SingleActivity";

export default function ActivityScreen({ route, navigation }) {
  const { name } = route.params;

  const bookingAlert = (message) =>
    Alert.alert("Event Booked!", message, [{ text: "Event Booked!" }]);

  {
    /* <Button
    onPress={submitActivity}
    title="Submit"
    color="#841584"
    accessibilityLabel="Submit form for activity"
  />; */
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Name: {JSON.stringify(name)}</Text>
      <SingleActivity navigation={navigation} />
      <Button
        title="Activity"
        onPress={() => navigation.navigate("Activity")}
      />
    </View>
  );
}
