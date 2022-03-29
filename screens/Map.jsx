/* eslint-disable no-underscore-dangle */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import { useContext, useState, useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserContext from "../context/User";
import fetchCollection from "../api/fetchCollection";
import addHash from "../utils/addHash";
import queryHashes from "../utils/queryHashes";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

export default function Map() {
  const { user } = useContext(UserContext);

  const initialState = {
    latitude: user.locationId._latitude,
    longitude: user.locationId._longitude,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  };

  const [region, setRegion] = useState(initialState);
  const [activities, setActivities] = useState([]);
  const [radiusInKm, setRadiusInKm] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // add a geohash to every new doc
    fetchCollection("activities").then((data) => {
      data.map((activity) => {
        if (!activity.geohash) {
          addHash(
            activity.locationId._latitude,
            activity.locationId._longitude,
            activity.id
          );
        }
      });
      // query by radiusInKm and set activities
      queryHashes(
        user.locationId._latitude,
        user.locationId._longitude,
        radiusInKm
      ).then((filteredActs) => {
        setActivities(filteredActs);
      });
    });
  }, [radiusInKm]);

  const handleChange = (e) => {
    setIsLoading(true);
    setRadiusInKm(e * 1.5);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>📍 {user.location}</Text>
        <View style={styles.sliderContainer}>
          <MultiSlider
            min={1}
            max={50}
            sliderLength={200}
            onValuesChange={(e) => {
              handleChange(e);
            }}
          />
          <Text>{radiusInKm}km</Text>
        </View>
        {isLoading && <Text style={{ fontStyle: "italic" }}>Loading...</Text>}
      </View>
      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={(region) => {
          setRegion(region);
        }}
      >
        {activities.map((activity) => (
          <Marker
            key={activity.title}
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
        <Circle
          center={{
            latitude: user.locationId._latitude,
            longitude: user.locationId._longitude,
          }}
          radius={radiusInKm * 1000}
          strokeColor="rgba(0, 0, 0, 0.3)"
          fillColor="rgba(0, 179, 8, 0.1)"
        />
        <MapView.Marker
          title={user.name}
          pinColor={"green"}
          coordinate={{
            latitude: user.locationId._latitude,
            longitude: user.locationId._longitude,
          }}
        />
      </MapView>
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
  headerContainer: {
    position: "absolute",
    zIndex: 1,
    padding: 15,
    backgroundColor: "#fff",
    width: "100%",
    opacity: 0.8,
  },
  header: {
    fontSize: 19,
    textAlign: "center",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
