import * as React from "react";
import { View, Text, Button } from "react-native";

export default function CategoryScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Name: {JSON.stringify(name)}</Text>

      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
