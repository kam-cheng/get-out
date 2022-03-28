import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UploadImage({ setState }) {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectedImage(pickerResult.uri);

    if (pickerResult.cancelled === true) {
      return;
    }
  };
  useEffect(() => {
    setState(selectedImage);
  }, [selectedImage]);

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage }} style={styles.thumbnail} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Upload Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
