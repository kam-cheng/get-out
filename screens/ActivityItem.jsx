/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import { Text, Image, View, Alert, ScrollView } from "react-native";
import { ui, text } from "../theme";
import Separator from "../components/ui/Separator";
import CustomButton from "../components/ui/CustomButton";
import bookActivity from "../api/bookActivity";
import cancelBooking from "../api/cancelBooking";
import cancelActivity from "../api/cancelActivity";
import UserContext from "../context/User";
import RatingScreen from "./RatingScreen";

export default function ActivityItem({
  navigation,
  route: {
    params: { item },
  },
}) {
  const { user } = useContext(UserContext);
  const [reviews, setReviews] = useState(false);

  const bookAlert = (message) =>
    Alert.alert("Event Booked!", message, [{ text: "OK" }]);

  const compareDate = (item) => {
    const today = new Date();
    const itemDate = new Date(item);
    if (today > itemDate) {
      return true;
    }
    return false;
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

  function BookCancelButton() {
    if (item.organiser === user.name) {
      return (
        <CustomButton
          onPress={deleteActivity}
          title="Cancel Activity"
          type="danger"
          accessibilityLabel="Delete activity"
        />
      );
    }
    if (compareDate(item.date)) {
      return <></>;
    }
    if (item.attendees.includes(user.name)) {
      return (
        <CustomButton
          onPress={cancelActivityBooking}
          title="Cancel Booking"
          type="danger"
          accessibilityLabel="Cancel activity"
        />
      );
    }
    return (
      <CustomButton
        onPress={booking}
        title="Book"
        accessibilityLabel="Book activity"
      />
    );
  }

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

  let reviewInput;

  if (reviews) reviewInput = <Text>User already submitted review</Text>;
  else
    reviewInput = (
      <View>
        <RatingScreen id={item.id} setReviews={setReviews} />
        <Text style={text.body}>Leave a review</Text>
      </View>
    );

  useEffect(() => {
    setReviews(false);
    item.reviews.forEach((review) => {
      if (review.user === user.name) {
        setReviews(true);
      }
    });
  }, []);

  return (
    <ScrollView>
      <View style={ui.container}>
        <Image style={ui.featureImage} source={{ uri: `${item.imgUrl}` }} />
        <Text style={text.meta}>{date.format(item.date)}</Text>
        <Text style={text.sectionTitleAlt}>{item.title}</Text>
        <Separator />
        <Text style={text.body}>{item.body}</Text>
        <Separator />
        <BookCancelButton />
        {reviewInput}
      </View>
    </ScrollView>
  );
}
