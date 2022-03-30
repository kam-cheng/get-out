/* eslint-disable react/prop-types */
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { text, ui, colors } from "../../theme";

export default function ActivityCard({
  title,
  imgUrl,
  body,
  reviews,
  handlePress,
}) {
  let rating;
  if (!reviews) rating = <></>;
  else {
    const ratingsArray = reviews.map((review) => review.rating);
    const average = (list) =>
      list.reduce((prev, curr) => prev + curr) / list.length;
    const ratingsAverage = average(ratingsArray).toFixed(1);
    rating = (
      <View style={ui.metaContainer}>
        <MaterialIcons name="star" color={colors.ratings} size={24} />
        <Text style={text.meta}>{ratingsAverage}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(title);
      }}
      style={ui.activityListTouchable}
    >
      <View style={ui.activityListContainer}>
        <Image
          resizeMode="cover"
          style={ui.activityListImage}
          source={{ uri: `${imgUrl}` }}
        />
        <View style={ui.activityListDescription}>
          <Text style={text.mediumTitle}>{title}</Text>
          <Text style={text.medium}>{body.substring(0, 40)}...</Text>
          {rating}
        </View>
      </View>
    </TouchableOpacity>
  );
}
