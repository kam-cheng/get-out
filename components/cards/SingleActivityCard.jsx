import React from "react";
import { View, Text, ImageBackground, Button, Alert } from "react-native";
export default function SingleActivityCard({
  date,
  time,
  title,
  ratings,
  body,
  imgURL,
  handlePress,
}) {
  return (
    <View>
      <ImageBackground
        source={{ uri: imgURL }}
        style={{ width: 100, height: 100 }}
      ></ImageBackground>
      <Text>{(date, time)}</Text>
      <Text>{title}</Text>
      <Text>{ratings}</Text>
      <Text>{body}</Text>
      <Button title="Book" onPress={() => handlePress(title)} />
    </View>
  );
}

// comments
