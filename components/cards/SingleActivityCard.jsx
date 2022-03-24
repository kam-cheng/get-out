import React from "react";
import { View, Text, ImageBackground, Button } from "react-native";
// import { Alert } from "react-native-web";
export default function SingleActivityCard({
  date,
  time,
  title,
  rating,
  body,
  imgURL,
}) {

  return (
    <View>
      <ImageBackground source={{ uri: imgURL }}></ImageBackground>
      <Text>{(date, time)}</Text>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      {""}
      <Text>{body}</Text>
      {""}
      <Button title="Book" onPress={() => alert("it works!")} />
    </View>
  );
}
