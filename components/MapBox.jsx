import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { text } from "../theme";

export default function MapBox({ item }) {
  const { locationId, location } = item;

  const initialRegion = {
    latitude: locationId._latitude,
    longitude: locationId._longitude,
    latitudeDelta: 0.07,
    longitudeDelta: 0.02,
  };

  return (
    <>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            coordinate={{
              latitude: locationId._latitude,
              longitude: locationId._longitude,
            }}
          />
        </MapView>
      </View>
      <View style={styles.locationContainer}>
        <MaterialIcons
          name="place"
          color="#ccc"
          size={27}
          style={styles.icon}
        />
        <Text style={text.meta}>{location}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 250,
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
  locationContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});
