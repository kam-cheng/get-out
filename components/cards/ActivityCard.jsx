/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { text, ui, colors } from "../../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function ActivityCard({ title, imgUrl, handlePress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(title);
      }}
      style={ui.activityListTouchable}
    >
      <View style={ui.activityListContainer}>
        <Image
          resizeMode="cover"
          style={ui.activityListImage}
          source={{ uri: `${imgUrl}` }}
        />
        <View style={ui.activityListDescription}>
          <Text style={text.mediumTitle}>{title}</Text>
          <Text style={text.medium}>
            The quick brown fox jumps over the lazy dog
          </Text>
          <View style={ui.metaContainer}>
            <MaterialIcons name="star" color={colors.ratings} size={24} />
            <Text style={text.meta}>4.9</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
