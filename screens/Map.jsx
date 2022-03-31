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
import { useNavigation } from "@react-navigation/native";
import { colors, text } from "../theme";

export default function Map() {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

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

  const handlePress = (item) => {
    navigation.navigate("Activity", { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="near-me" color={colors.primary} size={20} />
          {/* <Text style={styles.header}>📍 {user.location}</Text> */}
          <Text style={[text.body, { marginLeft: 4 }]}>{user.location}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MultiSlider
            min={1}
            max={50}
            sliderLength={200}
            onValuesChange={(e) => {
              handleChange(e);
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="place" color={colors.light} size={20} />
            <Text style={text.meta}>{radiusInKm} Km</Text>
          </View>
        </View>
        {isLoading && (
          <Text style={[text.meta, { textAlign: "center" }]}>...</Text>
        )}
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
            key={activity.id}
            coordinate={{
              latitude: activity.locationId._latitude,
              longitude: activity.locationId._longitude,
            }}
          >
            <Callout tooltip onPress={() => handlePress(activity)}>
              <View>
                <View style={styles.bubble}>
                  <MaterialIcons
                    name="visibility"
                    color={colors.meta}
                    size={24}
                    style={styles.openIcon}
                  />
                  <Text style={styles.title}>{activity.title}</Text>
                  <Text style={text.body}>{`${activity.body.substring(
                    0,
                    20
                  )}...`}</Text>
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
          pinColor="#88E8A0"
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
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  openIcon: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  headerContainer: {
    position: "absolute",
    zIndex: 1,
    padding: 15,
    backgroundColor: "#fff",
    width: "100%",
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
