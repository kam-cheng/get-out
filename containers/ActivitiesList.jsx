/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Text, View } from "react-native";
// import useActivitiesList from "../hooks/useActivitiesList";
import { text } from "../theme";
import fetchDocuments from "../api/fetchDocuments";

export default function ActivitiesList({ title, props }) {
  const [activities, setActivities] = useState([]);

  // eslint-disable-next-line react/prop-types
  props.setState = setActivities;

  fetchDocuments(props);

  if (activities.length === 0) {
    return <Text style={text.subtitle}>Loading Activities...</Text>; // or a spinner
  }
  return (
    <>
      <Text style={text.subtitle}>{title}</Text>
      {activities.map((activity) => (
        <View
          key={activity.id}
          style={{ backgroundColor: "pink", margin: 10, padding: 10 }}
        >
          <Text style={text.body}>{activity.Activity}</Text>
          <Text style={text.body}>{activity.Image}</Text>
          <Text style={text.body}>{activity.Date}</Text>
        </View>
      ))}
    </>
  );
}
