/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { text } from "../theme";
import fetchDocuments from "../api/fetchDocuments";
import ActivityCard from "../components/cards/ActivityCard";

export default function ActivitiesList({ heading, props }) {
  const [activities, setActivities] = useState([]);
  const navigation = useNavigation();

  props.setState = setActivities;

  fetchDocuments(props);

  const handlePress = (item) => {
    navigation.navigate("Activity", { item });
  };

  if (activities.length === 0)
    return <Text style={text.subtitle}>Loading Activities...</Text>; // or a spinner
  return (
    <>
      <Text style={text.profileSectionTitle}>{heading}</Text>
      {activities.map((item) => (
        <ActivityCard
          key={item.id}
          id={item.id}
          title={item.Activity}
          img_url={item.Image}
          handlePress={() => handlePress(item)}
        />
      ))}
    </>
  );
}
