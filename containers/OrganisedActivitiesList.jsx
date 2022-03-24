import React, { useContext } from "react";
import { Text, View } from "react-native";
import useOrganisedActivities from "../hooks/useOrganisedActivities";
import UserContext from "../context/User";
import { text } from "../theme";

export default function OrganisedActivitiesList() {
  const {
    user: { name },
  } = useContext(UserContext);
  const organised = useOrganisedActivities(name);

  if (organised.length > 0) {
    return (
      <>
        <Text style={text.subtitle}>Organised Activities</Text>
        {organised.map((activity) => (
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
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}
