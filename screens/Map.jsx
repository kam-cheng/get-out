import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import UserContext from "../context/User";
import { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import fetchCollection from "../api/fetchCollection";
import addHash from "../utils/addHash";

export default function Map() {
  const { user } = useContext(UserContext);

  const initialState = {
    latitude: user.locationId._latitude,
    longitude: user.locationId._longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  // This defines the initial region
  const [region, setRegion] = useState(initialState);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchCollection("activities").then((data) => {
      setActivities(data);
    });
  }, []);

  activities.map((activity) => {
    if (!activity.hash) {
      addHash(
        activity.locationId._latitude,
        activity.locationId._longitude,
        activity.id
      );
    }
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={(region) => {
          setRegion(region);
        }}
      >
        {activities.map((activity) => (
          <MapView.Marker
            key={activity.id}
            title={activity.title}
            coordinate={{
              latitude: activity.locationId._latitude,
              longitude: activity.locationId._longitude,
            }}
          />
        ))}
      </MapView>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>My location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    width: "30%",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#7bb886",
  },
});
