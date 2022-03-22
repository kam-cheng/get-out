import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Activities from "./containers/Activities";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>GoOut!</Text>
      <Activities />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
