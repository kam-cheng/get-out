import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

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
      {/* <View style={styles.container}>
        <ImageBackground
          source={{
            uri: img_url,
          }}
          //resize image
          resizeMode={"cover"}
          style={styles.image}
        >
          <linearGradient colors={["transparent", "rgba(0,0,0,0.5)"]} />
          <Text style={styles.text}>{title}</Text>
        </ImageBackground>
      </View> */}
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

//stylesheet to be sorted
