/* eslint-disable no-underscore-dangle */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import UserContext from "../context/User";
import { useContext, useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import fetchCollection from "../api/fetchCollection";
import addHash from "../utils/addHash";
import queryHashes from "../utils/queryHashes";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Map() {
  const { user } = useContext(UserContext);
  console.log(user.locationId);
  // This defines the initial region
  const initialState = {
    latitude: user.locationId._latitude,
    longitude: user.locationId._longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const [region, setRegion] = useState(initialState);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchCollection("activities").then((data) => {
      // add a geohash to every new doc
      data.map((activity) => {
        if (!activity.geohash) {
          addHash(
            activity.locationId._latitude,
            activity.locationId._longitude,
            activity.id
          );
        }
      });
      // query by radius (currently hard-coded in function)
      queryHashes().then((filteredActs) => setActivities(filteredActs));
    });
  }, []);

  // {"_latitude": 51.50795973303849, "_longitude": -0.3234002831740929}

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
          <Marker
            key={activity.id}
            title={activity.title}
            coordinate={{
              latitude: activity.locationId._latitude,
              longitude: activity.locationId._longitude,
            }}
          >
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <MaterialIcons
                    name="open-in-new"
                    color={"#212121"}
                    size={25}
                    style={styles.openIcon}
                  />
                  <Text style={styles.title}>{activity.title}</Text>
                  <Text>{`${activity.body.substring(0, 20)}...`}</Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
        <MapView.Marker
          title={user.name}
          pinColor={"green"}
          coordinate={{
            latitude: user.locationId._latitude,
            longitude: user.locationId._longitude,
          }}
        />
      </MapView>
      {/* <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>My location</Text>
        </TouchableOpacity>
      </View> */}
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
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  openIcon: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
