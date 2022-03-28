/* eslint-disable react/prop-types */
import React from "react";
import { Text, Image, View } from "react-native";
import { ui, text } from "../theme";
import Separator from "../components/ui/Separator";
import moment from "moment";

export default function ActivityItem({
  route: {
    params: { item },
  },
}) {
  return (
    <View style={ui.container}>
      <Image style={ui.featureImage} source={{ uri: `${item.Image}` }} />
      {/* <Text>{item.Category}</Text> */}
      <Text style={text.meta}>
        {moment(item.Date).format("ddd, D MMM YYYY • hA")}
      </Text>
      <Text style={text.sectionTitleAlt}>{item.Activity}</Text>
      <Separator />
      <Text style={text.body}>{item.Description}</Text>
    </View>
  );
}
