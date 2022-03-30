import React from "react";
import { Text, View, ScrollView } from "react-native";
import CategoryList from "../containers/CategoryList";
import { ui, text } from "../theme";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={ui.container}>
        <Text style={text.title}>GoOut!</Text>
        <Text style={text.subtitle}>You Might Like...</Text>
        <CategoryList navigation={navigation} />
      </View>
    </ScrollView>
  );
}
