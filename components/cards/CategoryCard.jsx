import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from "react-native";

export default function CategoryCard({ name, imgUrl, handlePress }) {
  return (
<TouchableOpacity
      onPress={() => {
        handlePress(name);
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
          <View>
            <Text style={styles.text}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    opacity: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
});
