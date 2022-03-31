/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import { Text, Image, View, Alert, ScrollView } from "react-native";
import { ui, text, colors } from "../theme";
import Separator from "../components/ui/Separator";
import CustomButton from "../components/ui/CustomButton";
import bookActivity from "../api/bookActivity";
import cancelBooking from "../api/cancelBooking";
import cancelActivity from "../api/cancelActivity";
import UserContext from "../context/User";
import * as Moment from "../utils/moment";
import MapBox from "../components/MapBox";
import RatingScreen from "./RatingScreen";
import ReviewsList from "../containers/ReviewsList";
import OrganiserCard from "../components/cards/OrganiserCard";

export default function ActivityItem({
  navigation,
  route: {
    params: { item },
  },
}) {
  const { user } = useContext(UserContext);
  const [reviews, setReviews] = useState(true);
  const [ratings, setRatings] = useState();

  const bookAlert = (message) =>
    Alert.alert("Activity Booked!", message, [{ text: "OK" }]);

  const cancelAlert = (message) => {
    Alert.alert("Activity Booking Cancelled!", message, [{ text: "OK" }]);
  };

  const deleteAlert = (message) => {
    Alert.alert("Activity Deleted!", message, [{ text: "OK" }]);
  };
  const compareDate = (item) => {
    const today = new Date();
    const itemDate = new Date(item);
    if (today > itemDate) {
      return true;
    }
    return false;
  };

  function booking() {
    bookActivity(user.name).then((msg) => {
      bookAlert(msg);
      navigation.navigate("Profile");
    });
  }

  function cancelActivityBooking() {
    cancelBooking(user.name).then((msg) => {
      cancelAlert(msg);
      navigation.navigate("Profile");
    });
  }

  function deleteActivity() {
    cancelActivity(item.id).then((msg) => {
      deleteAlert(msg);
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

  let reviewInput;
  if (reviews || !compareDate(item.date)) reviewInput = <></>;
  else
    reviewInput = (
      <View>
        {/* <Separator /> */}
        <Text style={[text.subtitle, { textAlign: "center", marginTop: 20 }]}>
          Rating
        </Text>
        <RatingScreen
          id={item.id}
          setReviews={setReviews}
          setRatings={setRatings}
        />
      </View>
    );

  useEffect(() => {
    setRatings(item.reviews);
    if (item.reviews)
      item.reviews.forEach((review) => {
        if (review.user === user.name) {
          setReviews(true);
          return;
        }
        setReviews(false);
      });
  }, []);

  return (
    <ScrollView>
      <View style={ui.container}>
        <Image style={ui.featureImage} source={{ uri: `${item.imgUrl}` }} />
        <Text style={text.meta}>{Moment.format(item.date)}</Text>
        <Text style={text.sectionTitleAlt}>{item.title}</Text>
        <Separator />
        <Text style={text.body}>{item.body}</Text>
        <Separator />
        <MapBox item={item} />

        <Separator />
        <OrganiserCard organiser={item.organiser} />
        {/* <Separator /> */}

        <BookCancelButton />
        {reviewInput}
        <Separator
          style={{
            padding: 15,
            borderBottomWidth: 1,
            borderColor: colors.lightGrey,
            marginBottom: 15,
          }}
        />
        <ReviewsList reviews={ratings} />
      </View>
    </ScrollView>
  );
}
