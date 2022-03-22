import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
} from "react-native";

export default function OrganiseForm() {
  const [activity, setActivity] = React.useState();
  const [category, setCategory] = React.useState();
  const [date, setDate] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();
  const [location, setLocation] = React.useState();
  const [organiser, setOrganiser] = React.useState();

  return (
    <SafeAreaView>
      <Text>Activity</Text>
      <TextInput style={styles.input} onChangeText={setActivity} />
      <Text>Category</Text>
      <TextInput style={styles.input} onChangeText={setCategory} />
      <Text>Date</Text>
      <TextInput style={styles.input} onChangeText={setDate} />
      <Text>Description</Text>
      <TextInput style={styles.input} onChangeText={setDescription} />
      <Text>Image</Text>
      <TextInput style={styles.input} onChangeText={setImage} />
      <Text>Location</Text>
      <TextInput style={styles.input} onChangeText={setLocation} />
      <Text>Organiser</Text>
      <TextInput style={styles.input} onChangeText={setOrganiser} />
      <Button
        onPress={console.log("button pressed")}
        title="Submit"
        color="#841584"
        accessibilityLabel="Submit form for activity"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
