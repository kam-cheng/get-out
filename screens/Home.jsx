import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import CategoryList from "../containers/CategoryList";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>GoOut!</Text>
      <View>
        <Text style={styles.heading}>You Might Like...</Text>
        <CategoryList navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: "#212121",
    fontSize: 30,
    fontFamily: "FugazOne-Regular",
    marginVertical: 30,
    marginBottom: 130,
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
  },
});
