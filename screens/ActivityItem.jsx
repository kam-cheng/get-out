/* eslint-disable react/prop-types */
import React from "react";
import { Text, Image, Alert, Button } from "react-native";
import bookActivity from "../api/bookActivity";


export default function ActivityItem({
  route: {
    params: { item },
  },
}) {

  const bookAlert = (message) =>
  Alert.alert("Event Booked!", message, [{ text: "OK" }]);

  function booking() {
    bookActivity(activityId)
    .then((msg) => {
      bookAlert(msg);
      navigation.navigate("Profile");
    });
  }

  return (
    <>
      <Text>{item.Activity}</Text>
      <Text>{item.Category}</Text>
      <Text>{item.Date}</Text>
      <Image
        style={{ width: 400, height: 400 }}
        source={{ uri: `${item.Image}` }}
      />
      <Text>{item.Description}</Text>

      <Button
          onPress={booking}
          title="Book"
          color="#841584"
          accessibilityLabel="Book activity"
        />
    </>
  );
}
