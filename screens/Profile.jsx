import * as React from "react";
import { View, Text } from "react-native";
import OrganiseForm from "../containers/OrganiseForm";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <OrganiseForm />
    </View>
  );
}
