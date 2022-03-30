import React from "react";
import { Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { ui, text, colors } from "../theme";

export default function ReviewsList({ reviews }) {
  if (!reviews) return <></>;
  // separate out all ratings
  const ratingsArray = reviews.map((review) => review.rating);
  const average = (list) =>
    list.reduce((prev, curr) => prev + curr) / list.length;
  const ratingsAverage = average(ratingsArray).toFixed(0);

  return (
    <View style={ui.container}>
      <Text style={text.sectionTitle}>Reviews List</Text>

      <Text style={text.subtitle}>Average Rating:</Text>
      <AirbnbRating isDisabled defaultRating={ratingsAverage} size={30} />
      {reviews.map((review) => (
        <View backgroundColor={colors.lightGrey} margin={10} key={review.user}>
          <Text style={text.body}>User: {review.user}</Text>
          <Text style={text.body}>Rating:</Text>
          <AirbnbRating
            isDisabled
            defaultRating={review.rating}
            size={20}
            showRating={false}
          />
          <Text style={text.body}>Comment: {review.review}</Text>
        </View>
      ))}
    </View>
  );
}
