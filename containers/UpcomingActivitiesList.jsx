import React, { useContext } from "react";
import { Text, View } from "react-native";
import useUpcomingActivities from "../hooks/useUpcomingActivities";
import UserContext from "../context/User";
import { text } from "../theme";

export default function UpcomingActivitiesList() {
  const {
    user: { name },
  } = useContext(UserContext);

  const upcomingList = useUpcomingActivities(name);
  if (upcomingList !== null && upcomingList.length > 0) {
    return (
      <>
        <Text style={text.subtitle}>Upcoming Activities</Text>
        {upcomingList.map((activity) => (
          <View
            key={activity.id}
            style={{ backgroundColor: "pink", margin: 10, padding: 10 }}
          >
            <Text style={text.body}>{activity.Activity}</Text>
            <Text style={text.body}>{activity.Image}</Text>
          </View>
        ))}
      </>
    );
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}
