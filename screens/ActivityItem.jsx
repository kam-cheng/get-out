/* eslint-disable react/prop-types */
import React from "react";
import { Text, Image, View } from "react-native";
import { ui, text } from "../theme";
import Separator from "../components/ui/Separator";
import moment from "moment";

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
    <View style={ui.container}>
      <Image style={ui.featureImage} source={{ uri: `${item.Image}` }} />
      {/* <Text>{item.Category}</Text> */}
      <Text style={text.meta}>
        {moment(item.Date).format("ddd, D MMM YYYY • hA")}
      </Text>
      <Text style={text.sectionTitleAlt}>{item.Activity}</Text>
      <Separator />
      <Text style={text.body}>{item.Description}</Text>
       <Separator />
       <Button
          onPress={booking}
          title="Book"
          color="#841584"
          accessibilityLabel="Book activity"
        />
    </View>
  );
}
