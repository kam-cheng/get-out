import React from "react";
import { Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { ui, text, colors } from "../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function ReviewsList({ reviews }) {
  if (!reviews) return <></>;
  // separate out all ratings
  const ratingsArray = reviews.map((review) => review.rating);
  const average = (list) =>
    list.reduce((prev, curr) => prev + curr) / list.length;
  const ratingsAverage = average(ratingsArray).toFixed(0);

  return (
    <View>
      <View style={ui.ratingContainer}>
        <MaterialIcons name="star" color={colors.ratings} size={24} />
        <Text style={text.ratingContainerLabel}>
          {" "}
          Reviews ({reviews.length})
        </Text>
      </View>
      {/* <Text style={[text.subtitle, { textAlign: "center" }, { marginTop: 20 }]}>
        Average Rating
      </Text> */}
      {/* <AirbnbRating isDisabled defaultRating={ratingsAverage} size={24} /> */}

      {reviews.map((review) => (
        <View
          backgroundColor={colors.lightGrey}
          margin={10}
          padding={20}
          key={review.user}
          borderRadius={10}
        >
          {/* <Text style={text.body}>Rating:</Text> */}

          <Text
            style={[
              text.body,
              { fontWeight: "700" },
              { marginTop: 10 },
              { marginBottom: 5 },
            ]}
          >
            {review.user}
          </Text>
          <AirbnbRating
            isDisabled
            defaultRating={review.rating}
            size={15}
            showRating={false}
            selectedColor={colors.ratings}
            starContainerStyle={{
              alignSelf: "flex-start",
              marginBottom: 15,
            }}
          />
          <Text style={text.body}>{review.review}</Text>
        </View>
      ))}
    </View>
  );
}
