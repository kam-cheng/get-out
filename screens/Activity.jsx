import * as React from "react";
import { Text } from "react-native";

export default function ActivityScreen({ route }) {
  const { title } = route.params;
  return <Text>The {title} </Text>;
}
