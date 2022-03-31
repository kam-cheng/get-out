import React from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import CategoryList from "../containers/CategoryList";
import { ui, text } from "../theme";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={ui.container}>
        {/* <Text style={text.title}>GoOut!</Text> */}
        <Image
          style={styles.logo}
          source={require("../assets/images/go-out-logo.png")}
        />
        <Text style={text.profileSectionTitle}>You Might Like...</Text>
        <CategoryList navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 110,
    height: 110,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "center",
  },
});
