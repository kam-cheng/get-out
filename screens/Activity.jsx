import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ActivityScreen({ route }) {
  const { title } = route.params;
  return (
    <View style={styles.body}>
      <Text>The {title} </Text>;
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
});
