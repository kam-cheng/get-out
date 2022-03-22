import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import CategoryList from "../containers/CategoryList";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>GoOut!</Text>
      <View style={{ height: 50 }} />
      <Text style={styles.heading2}>You Might Like...</Text>
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
  heading2: {
    color: "#212121",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
});
