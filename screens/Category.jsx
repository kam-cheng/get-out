import * as React from "react";
import { View, Text } from "react-native";
import { ui, text } from "../theme";
import ActivitiesList from "../containers/ActivitiesList";

export default function CategoryScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={ui.container}>
      <View>
        <Text style={text.body}>Browsing Activities</Text>
      </View>
      <ActivitiesList
        navigation={navigation}
        heading={`${name}`}
        props={{
          query: "==",
          collection: "activities",
          key: "category",
          value: `${name}`,
        }}
      />
    </View>
  );
}
