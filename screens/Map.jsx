import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserContext from "../context/User";
import { useContext, useState } from "react";
import MapView from "react-native-maps";

export default function Map() {
  const { user, setUser } = useContext(UserContext);

  const [region, setRegion] = useState({
    latitude: user.geoLocation._latitude,
    longitude: user.geoLocation._longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  console.log(user.geoLocation);

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
          title="home"
          coordinate={{
            latitude: user.geoLocation._latitude,
            longitude: user.geoLocation._longitude,
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
