import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { colors, ui, text } from "../theme";

export default function UploadImage({ setState, type }) {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePickerAsync = async () => {
    // request permission to access phone storage
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // gets storage path of photo and adds to Selected Image state
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectedImage(pickerResult.uri);

    if (pickerResult.cancelled === true) {
      setSelectedImage(null);
    }
  };

  // pass selectedImage back to parent component
  useEffect(() => {
    setState(selectedImage);
  }, [selectedImage]);

  // only display photo when path has been added
  if (selectedImage !== null) {
    return (
      <View style={ui.uploader}>
        <Image source={{ uri: selectedImage }} style={ui.thumbnail} resizeMode="cover"/>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={openImagePickerAsync}
      style={ui.buttonContainerPicker}
    >
      <View style={ui.buttonIconContainer}>
        <Text
          style={[
            text.buttonLabel,
            type === "danger" && { color: colors.white },
          ]}
        >
          Upload Photo
        </Text>
      </View>
    </TouchableOpacity>
  );
}

