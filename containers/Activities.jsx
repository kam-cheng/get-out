import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import fetchCollection from "../api/fetchCollection";

export default function Activities() {
  const [usersList, setUsersList] = useState([]);
  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    fetchCollection("Users").then((users) => {
      setUsersList(users);
    });
    fetchCollection("Activities").then((activities) => {
      setActivitiesList(activities);
    });
  }, [activitiesList]);

  return (
    <>
      <Text>Here we will display a list of usernames</Text>
      <FlatList
        data={usersList}
        renderItem={({ item }) => (
          <Text id={item.id}>
            {`Name: ${item.Name}
             Rating: ${item.Rating}`}
          </Text>
        )}
      />
      <Text>Here we will display a list of Activities</Text>
      <FlatList
        data={activitiesList}
        renderItem={({ item }) => (
          <Text id={item.id}>
            {`Activity: ${item.Activity}
             Category: ${item.Category}
             Date: ${item.Date}
             Description: ${item.Description}
             Image: ${item.Image}
             Location: ${item.Location}
             Organiser: ${item.Organiser}`}
          </Text>
        )}
      />
    </>
  );
}
