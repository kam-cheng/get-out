import React from "react";
import { Text, View } from "react-native";

export default function ReviewsList({ reviews }) {
  // separate out all ratings
  const ratingsArray = reviews.map((review) => review.rating);
  const average = (list) =>
    list.reduce((prev, curr) => prev + curr) / list.length;
  const ratingsAverage = average(ratingsArray);
  return (
    <View>
      <Text>Reviews List</Text>
      <Text>Average Rating: {ratingsAverage}</Text>
      {reviews.map((review) => (
        <View key={review.user}>
          <Text>User: {review.user}</Text>
          <Text>Rating: {review.rating}</Text>
          <Text>Comment: {review.review}</Text>
        </View>
      ))}
    </View>
  );
}
