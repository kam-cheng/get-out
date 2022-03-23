import React, { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import addActivity from "../api/addActivity";
import UserContext from "../context/User";
import { text, ui } from "../theme/index";

export default function OrganiseForm({ navigation }) {
  const { user } = useContext(UserContext);
  const [activity, setActivity] = React.useState();
  const [category, setCategory] = React.useState();
  const [date, setDate] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();
  const [location, setLocation] = React.useState();

  const completionAlert = (message) =>
    Alert.alert("Create New Activity", message, [{ text: "OK" }]);

  function submitActivity() {
    addActivity({
      activity,
      category,
      date,
      description,
      image,
      location,
      organiser: user.name,
    }).then((msg) => {
      completionAlert(msg);
      navigation.navigate("Profile");
    });
  }

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={ui.container}>
        <Text style={text.body}>Activity</Text>
        <TextInput style={styles.input} onChangeText={setActivity} />
        <Text style={text.body}>Category</Text>
        <TextInput style={styles.input} onChangeText={setCategory} />
        <Text style={text.body}>Date</Text>
        <TextInput style={styles.input} onChangeText={setDate} />
        <Text style={text.body}>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDescription}
          multiline
        />
        <Text style={text.body}>Image</Text>
        <TextInput style={styles.input} onChangeText={setImage} />
        <Text style={text.body}>Location</Text>
        <TextInput style={styles.input} onChangeText={setLocation} />
        <Button
          onPress={submitActivity}
          title="Submit"
          color="#841584"
          accessibilityLabel="Submit form for activity"
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
