import React, {useState, useEffect} from "react";
import { FlatList, Text } from "react-native";
import fetchCollection from "../api/fetchCollection";

export default function ActivityByCategory() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetchCollection("Activities").then((activities) => {
            setActivities(activities)
        })
    }, [category]);

    return (
        <>
        <Text>Here we will display a list of Activities by category</Text>
        <FlatList 
        data={activities}
        renderItem={({ item }) => (
          <Text id={item.id}>
            {`Activity: ${item.Activity}
             Date: ${item.Date}
             Description: ${item.Description}
             Image: ${item.Image}
             Location: ${item.Location}
             Organiser: ${item.Organiser}`}
          </Text>
        )}
        />
        </>
    )
}