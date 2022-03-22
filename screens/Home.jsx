import React from "react";
import { Button, Text, View } from "react-native";
import Activities from "../containers/Activities";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Categories"
        onPress={() => navigation.navigate("Categories")}
      />
      <Text>GoOut!</Text>
      <Activities />
    </View>
  );
}
