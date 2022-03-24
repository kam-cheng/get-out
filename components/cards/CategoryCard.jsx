import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CategoryCard({ id, name, imgUrl, handlePress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(name, id);
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: imgUrl,
          }}
          resizeMode={"cover"}
          style={styles.image}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.5)"]}
            style={styles.background}
          />
          <Text style={styles.text}>{name}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    marginBottom: 15,
    overflow: "hidden",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontFamily: "Fredoka-Regular",
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "italic",
    position: "absolute",
    bottom: 30,
    left: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
});
