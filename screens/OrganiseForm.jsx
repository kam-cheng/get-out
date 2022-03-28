import React, { useContext, useRef, useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { SafeAreaView, TextInput, Text, Button, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import addActivity from "../api/addActivity";
import UserContext from "../context/User";
import CustomButton from "../components/ui/CustomButton";
import { ui, text } from "../theme";
import UploadImage from "../components/ImagePicker";

export default function OrganiseForm({ navigation, route }) {
  const { user } = useContext(UserContext);
  const [activity, setActivity] = React.useState();
  const [category, setCategory] = React.useState();
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();
  const [imageUrl, setImageUrl] = React.useState();
  const [location, setLocation] = React.useState();
  const [latitude, setLatitude] = React.useState();
  const [longitude, setLongitude] = React.useState();
  const [loading, setLoading] = React.useState(false);

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
    setLoading(true);
    addActivity({
      activity,
      category,
      date,
      description,
      image,
      imageUrl,
      location,
      organiser: user.name,
      longitude,
      latitude,
    })
      .then((msg) => {
        setLoading(false);
        completionAlert(msg);
        navigation.navigate("Profile");
      })
      .catch((err) => {
        setLoading(false);
        completionAlert("Unable to submit form - please try again");
      });
  }

  // setting references so that text input jumps to next input box when return key is pressed
  const refCategory = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refLocation = useRef();

  // making submit button a variable which changes after button press
  let submitButton;
  if (loading) {
    submitButton = (
      <CustomButton
        title="Submitting"
        accessibilityLabel="Submiting form for activity"
        type="primary"
        disabled
      />
    );
  } else {
    submitButton = (
      <CustomButton
        title="Submit"
        accessibilityLabel="Submit form for activity"
        type="primary"
        onPress={submitActivity}
      />
    );
  }

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
          onSubmitEditing={() => refDescription.current.focus()}
          placeholder="Category"
          blurOnSubmit={false}
        />
        <Button onPress={showDatepicker} title="Select Date!" />
        <Button onPress={showTimepicker} title="Select Time!" />
        <Text style={text.body}>Selected: {date.toLocaleString()}</Text>

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
        <UploadImage setState={setImageUrl} />
        <Text style={text.inputLabel}>Location</Text>
        <TextInput
          style={ui.input}
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
        {submitButton}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
