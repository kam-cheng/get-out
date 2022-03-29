/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Text, Image, View, Alert } from "react-native";
import { ui, text } from "../theme";
import Separator from "../components/ui/Separator";
import CustomButton from "../components/ui/CustomButton";
import bookActivity from "../api/bookActivity";
import cancelBooking from "../api/cancelBooking";
import cancelActivity from "../api/cancelActivity";
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

  const compareDate = (item) => {
    const today = new Date();
    const itemDate = new Date(item);
    if (today > itemDate) {
      return true;
    } else {
      return false;
    }
  };

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

  function deleteActivity() {
    cancelActivity(item.id).then((msg) => {
      bookAlert(msg);
      navigation.navigate("Profile");
    });
  }

  const BookCancelButton = () => {
    if (item.organiser === user.name) {
      return (
        <CustomButton
          onPress={deleteActivity}
          title="Cancel Activity"
          type="danger"
          accessibilityLabel="Delete activity"
        />
      );
    } else if (compareDate(item.date)) {
      return (
        <View>
          <Text style={text.body}>Leave a review</Text>
        </View>
      );
    } else if (item.attendees.includes(user.name)) {
      return (
        <CustomButton
          onPress={cancelActivityBooking}
          title="Cancel Booking"
          type="danger"
          accessibilityLabel="Cancel activity"
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

  const date = {
    format: (dateString) => {
      const getDate = new Date(dateString).toDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const time = new Date(dateString);
      let hour = time.getHours();
      let minutes = time.getMinutes();

      if (hour < 10) {
        hour = `0${hour}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      return `${getDate} • ${hour}:${minutes}`;
    },
  };

  return (
    <View style={ui.container}>
      <Image style={ui.featureImage} source={{ uri: `${item.imgUrl}` }} />
      <Text style={text.meta}>{date.format(item.date)}</Text>
      <Text style={text.sectionTitleAlt}>{item.title}</Text>
      <Separator />
      <Text style={text.body}>{item.body}</Text>
      <Separator />
      <BookCancelButton />
    </View>
  );
}
