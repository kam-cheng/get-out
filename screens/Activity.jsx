import * as React from "react";
import { Text, View, ImageBackground } from "react-native";
import SingleActivity from "../containers/SingleActivity";
import { ui, text } from "../theme";

export default function ActivityScreen({ route, navigation }) {
  const { title, img_url } = route.params;
  return (
    <View style={ui.container}>
      <SingleActivity navigation={navigation} />
    </View>
  );
}
