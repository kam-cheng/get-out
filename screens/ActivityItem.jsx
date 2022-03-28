/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Text, Image, View, Alert } from "react-native";
import moment from "moment";
import { ui, text } from "../theme";
import Separator from "../components/ui/Separator";
import CustomButton from "../components/ui/CustomButton";
import bookActivity from "../api/bookActivity";
import cancelBooking from "../api/cancelBooking";
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

  function cancelActivityBooking() {
    cancelBooking(user.name, item.id).then((msg) => {
      bookAlert(msg);
      navigation.navigate("Profile");
    });
  }

  const BookingCancelButton = () => {
    if (item.Attendees.includes(user.name)) {
      return (
        <CustomButton
          onPress={cancelActivityBooking}
          title="Cancel"
          type="danger"
          accessibilityLabel="Book activity"
        />
      );
    } else {
      return (
        <CustomButton
          onPress={booking}
          title="Book"
          accessibilityLabel="Book activity"
        />
      );
    }
  };

  return (
    <View style={ui.container}>
      <Image style={ui.featureImage} source={{ uri: `${item.imgUrl}` }} />
      {/* <Text>{item.Category}</Text> */}
      <Text style={text.meta}>{moment(item.Date).calendar()}</Text>
      <Text style={text.sectionTitleAlt}>{item.Activity}</Text>
      <Separator />
      <Text style={text.body}>{item.body}</Text>
      <Separator />
      <BookingCancelButton />
    </View>
  );
}
