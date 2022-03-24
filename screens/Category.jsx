import * as React from "react";
import { View, Text } from "react-native";
import { ui, text } from "../theme";
import ActivityList from "../containers/ActivityList";

export default function CategoryScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={ui.container}>
      <View>
        <Text style={text.body}>Browsing Activities</Text>
        <Text style={text.subtitle}>{JSON.stringify(name)}</Text>
      </View>
      <ActivityList navigation={navigation} />
    </View>
  );
}
