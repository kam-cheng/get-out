import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ui } from "../../theme";

export default function ActivityCard({
  id,
  title,
  img_url,
  rating,
  handlePress,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(title, id);
      }}
    >
      <View style={ui.activityListContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: `${img_url}` }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
          <Text>This is the description</Text>
          <Text>Rating: 5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

//stylesheet to be sorted
