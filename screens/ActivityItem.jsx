/* eslint-disable react/prop-types */
import React from "react";
import { Text, Image } from "react-native";

export default function ActivityItem({
  route: {
    params: { item },
  },
}) {
  return (
    <>
      <Text>{item.Activity}</Text>
      <Text>{item.Category}</Text>
      <Text>{item.Date}</Text>
      <Image
        style={{ width: 400, height: 400 }}
        source={{ uri: `${item.Image}` }}
      />
      <Text>{item.Description}</Text>
    </>
  );
}
