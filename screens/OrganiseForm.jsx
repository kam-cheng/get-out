import React, { useContext, useRef } from "react";
import { SafeAreaView, TextInput, Text, Button, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import addActivity from "../api/addActivity";
import UserContext from "../context/User";
import CustomButton from "../components/ui/CustomButton";
import { ui, text } from "../theme";

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

  // setting references so that text input jumps to next input box when return key is pressed
  const refCategory = useRef();
  const refDate = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refLocation = useRef();

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={ui.container}>
        <Text style={text.inputLabel}>Activity</Text>
        <TextInput
          style={ui.input}
          onChangeText={setActivity}
          returnKeyType="next"
          onSubmitEditing={() => refCategory.current.focus()}
          placeholder="Activity"
          blurOnSubmit={false}
        />
        <Text style={text.inputLabel}>Category</Text>
        <TextInput
          style={ui.input}
          onChangeText={setCategory}
          ref={refCategory}
          returnKeyType="next"
          onSubmitEditing={() => refDate.current.focus()}
          placeholder="Category"
          blurOnSubmit={false}
        />
        <Text style={text.inputLabel}>Date</Text>
        <TextInput
          style={ui.input}
          onChangeText={setDate}
          ref={refDate}
          returnKeyType="next"
          onSubmitEditing={() => refDescription.current.focus()}
          placeholder="Date"
          blurOnSubmit={false}
        />
        <Text style={text.inputLabel}>Description</Text>
        <TextInput
          style={ui.input}
          onChangeText={setDescription}
          multiline
          ref={refDescription}
          returnKeyType="next"
          onSubmitEditing={() => refImage.current.focus()}
          placeholder="Description"
          blurOnSubmit={false}
        />
        <Text style={text.inputLabel}>Image</Text>
        <TextInput
          style={ui.input}
          onChangeText={setImage}
          ref={refImage}
          returnKeyType="next"
          onSubmitEditing={() => refLocation.current.focus()}
          placeholder="Image URL"
          blurOnSubmit={false}
        />
        <Text style={text.inputLabel}>Location</Text>
        <TextInput
          style={ui.input}
          onChangeText={setLocation}
          placeholder="Location"
          ref={refLocation}
        />
        {/* <Button
          onPress={submitActivity}
          title="Submit"
          color="#841584"
          accessibilityLabel="Submit form for activity"
        /> */}
        <CustomButton
          title="Submit"
          accessibilityLabel="Submit form for activity"
          type="primary"
          onPress={submitActivity}
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
