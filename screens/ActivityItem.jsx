/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Text, Image, View, Alert } from "react-native";
import { ui, text } from "../theme";
import Separator from "../components/ui/Separator";
import moment from "moment";
import CustomButton from "../components/ui/CustomButton";
import bookActivity from "../api/bookActivity";
import UserContext from "../context/User";

export default function ActivityItem({
  navigation,
  route: {
    params: { item },
  },
}) {
  const { user } = useContext(UserContext);

  const bookAlert = (message) =>
    Alert.alert("Event Booked!", message, [{ text: "OK" }]);

  function booking() {
    bookActivity(user.name, item.id).then((msg) => {
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
      <CustomButton
        onPress={booking}
        title="Book"
        color="#841584"
        accessibilityLabel="Book activity"
      />
    </View>
  );
}
