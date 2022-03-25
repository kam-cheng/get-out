/* eslint-disable react/prop-types */
import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useActivitiesList from "../hooks/useActivitiesList";
import { text } from "../theme";
import ActivityCard from "../components/cards/ActivityCard";

export default function ActivitiesList({ heading, props }) {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("Activity", { item });
  };
  // const organised = useOrganisedActivities(name);
  const organised = useActivitiesList(props);
  if (organised !== null && organised.length > 0) {
    return (
      <>
        <Text style={text.subtitle}>{heading}</Text>
        {organised.map((item) => (
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
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}
