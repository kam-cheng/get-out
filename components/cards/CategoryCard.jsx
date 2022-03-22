import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function CategoryCard({ name }) {
  return (
    <View style={styles.row}>
      <Text style={styles.heading3}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#808080",
    padding: 30,
    marginBottom: 10,
    flex: 1,
  },
  heading3: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
});
