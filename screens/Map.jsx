import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserContext from "../context/User";
import { useContext, useState } from "react";
import MapView from "react-native-maps";

export default function Map() {
  const { user } = useContext(UserContext);

  // This defines the initial region
  const [region, setRegion] = useState({
    latitude: user.locationId._latitude,
    longitude: user.locationId._longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
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
        <MapView.Marker
          title={user.name}
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
    width: "100%",
    height: "100%",
  },
});
