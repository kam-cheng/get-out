import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserContext from "../context/User";
import { useContext, useState } from "react";
import MapView from "react-native-maps";
import Marker from "react-native-maps";

export default function Map() {
  const { user, setUser } = useContext(UserContext);

  const [region, setRegion] = useState({
    latitude: user.lat,
    longitude: user.lng,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={styles.body}>
      <Text>{user.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: user.lat,
          longitude: user.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => {
          setRegion(region);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
