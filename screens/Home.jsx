import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import CategoryList from "../containers/CategoryList";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GoOut!</Text>
      <View>
        <Text style={styles.heading}>You Might Like...</Text>
        <CategoryList />
      </View>
    </View>
  );
}

// cateogry list parent view
// style={{ width: "100%" }}

const styles = StyleSheet.create({
  logo: {
    color: "#212121",
    fontSize: 30,
    fontFamily: "FugazOne-Regular",
    marginVertical: 30,
    marginBottom: 150,
    alignSelf: "center",
  },
  heading: {
    color: "#212121",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
});
