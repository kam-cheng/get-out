import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ui } from "../../theme";

export default function CategoryCard({ id, name, imgUrl, handlePress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(name, id);
      }}
      style={ui.touchableContainer}
    >
      <View style={ui.categoryListContainer}>
        <ImageBackground
          source={{
            uri: imgUrl,
          }}
          resizeMode={"cover"}
          style={ui.categoryListImage}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.5)"]}
            style={ui.categoryListBackground}
          />
          <Text style={ui.categoryListText}>{name}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}
