/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { text } from "../theme";
import fetchDocuments from "../api/fetchDocuments";
import ActivityCard from "../components/cards/ActivityCard";
import addHash from "../utils/addHash";

export default function ActivitiesList({ heading, props }) {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  props.setState = setActivities;

  fetchDocuments(props, setLoading);

  activities.map((activity) => {
    if (!activity.geohash) {
      addHash(
        activity.locationId._latitude,
        activity.locationId._longitude,
        activity.id
      );
    }
  });

  const handlePress = (item) => {
    navigation.navigate("Activity", { item });
  };

  if (loading)
    return (
      <View>
        <ActivityIndicator size="large" color="#7DB886" />
      </View>
    );
  if (activities.length === 0) return <Text>{""}</Text>;
  return (
    <>
      <Text style={text.profileSectionTitle}>{heading}</Text>
      {activities.map((item) => (
        <ActivityCard
          key={item.id}
          id={item.id}
          title={item.title}
          imgUrl={item.imgUrl}
          body={item.body ? item.body : ""}
          reviews={item.reviews}
          handlePress={() => handlePress(item)}
        />
      ))}
    </>
  );
}
