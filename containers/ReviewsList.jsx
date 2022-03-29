import React from "react";
import { Text, View } from "react-native";
import { ui, text } from "../theme";

export default function ReviewsList({ reviews }) {
  if (!reviews) return <></>;
  // separate out all ratings
  const ratingsArray = reviews.map((review) => review.rating);
  const average = (list) =>
    list.reduce((prev, curr) => prev + curr) / list.length;
  const ratingsAverage = average(ratingsArray).toFixed(1);
  return (
    <View style={ui.container}>
      <Text style={text.sectionTitleAlt}>Reviews List</Text>
      <Text style={text.sectionTitleAlt}>Average Rating: {ratingsAverage}</Text>
      {reviews.map((review) => (
        <View key={review.user}>
          <Text style={text.body}>User: {review.user}</Text>
          <Text style={text.body}>Rating: {review.rating}</Text>
          <Text style={text.body}>Comment: {review.review}</Text>
        </View>
      ))}
    </View>
  );
}
