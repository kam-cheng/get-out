import React, { useContext, useRef, useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

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

export default function OrganiseForm({ navigation, route }) {
  const { user } = useContext(UserContext);
  const [activity, setActivity] = React.useState();
  const [category, setCategory] = React.useState();
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();
  const [location, setLocation] = React.useState();
  const [latitude, setLatitude] = React.useState();
  const [longitude, setLongitude] = React.useState();

  React.useEffect(() => {
    if (route.params?.data) {
      setLocation(route.params.data.description);
      setLatitude(route.params.details.geometry.location.lat);
      setLongitude(route.params.details.geometry.location.lng);
    }
  }, [route.params?.data]);

  const completionAlert = (message) =>
    Alert.alert("Create New Activity", message, [{ text: "OK" }]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  function submitActivity() {
    addActivity({
      activity,
      category,
      date,
      description,
      image,
      location,
      organiser: user.name,
      longitude,
      latitude,
    }).then((msg) => {
      completionAlert(msg);
      navigation.navigate("Profile");
    });
  }

  // setting references so that text input jumps to next input box when return key is pressed
  const refCategory = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refLocation = useRef();

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={ui.container}>
        <Text style={text.body}>Activity</Text>
        <TextInput
          style={styles.input}
          onChangeText={setActivity}
          returnKeyType="next"
          onSubmitEditing={() => refCategory.current.focus()}
          blurOnSubmit={false}
        />
        <Text style={text.body}>Category</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCategory}
          ref={refCategory}
          returnKeyType="next"
          onSubmitEditing={() => refImage.current.focus()}
          blurOnSubmit={false}
        />
        <Button onPress={showDatepicker} title="Select Date!" />
        <Button onPress={showTimepicker} title="Select Time!" />
        <Text style={text.body}>Selected: {date.toLocaleString()}</Text>
        <Text style={text.body}>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDescription}
          multiline
          ref={refDescription}
          returnKeyType="next"
          onSubmitEditing={() => refImage.current.focus()}
          blurOnSubmit={false}
        />
        <Text style={text.body}>Image</Text>
        <TextInput
          style={styles.input}
          onChangeText={setImage}
          ref={refImage}
          returnKeyType="next"
          onSubmitEditing={() => refLocation.current.focus()}
          blurOnSubmit={false}
        />
        <Text style={text.body}>Location</Text>
        <TextInput
          style={styles.input}
          value={location}
          onFocus={() => {
            navigation.navigate({
              name: "Location Input",
              params: { setLocation },
              merge: true,
            });
          }}
          ref={refLocation}
        />
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
