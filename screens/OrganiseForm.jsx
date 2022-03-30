/* eslint-disable react/prop-types */
import React, { useContext, useRef, useState, useEffect } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { SafeAreaView, TextInput, Text, Button, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import addActivity from "../api/addActivity";
import UserContext from "../context/User";
import CustomButton from "../components/ui/CustomButton";
import { ui, text } from "../theme";
import UploadImage from "../components/ImagePicker";
import * as Moment from "../utils/moment";
import { View } from "react-native";

export default function OrganiseForm({ navigation, route }) {
  const { user } = useContext(UserContext);
  const [activity, setActivity] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [location, setLocation] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [loading, setLoading] = useState(false);

  // set location data
  useEffect(() => {
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
    console.log(currentDate);
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

  // function to submit activity on button press, to return with a completion alert, and then to navigate back to the profile page
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

  // assigning the submit button a variable which changes after button press to Submitting...
  let submitButton;
  if (loading) {
    submitButton = (
      <CustomButton
        title="Submitting..."
        accessibilityLabel="Submiting form for activity"
        type="inactive"
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

  // assigned image inputs to variable and hiding the other when one has a value input
  let imageTextBox = (
    <TextInput
      style={ui.input}
      onChangeText={setImage}
      ref={refImage}
      returnKeyType="next"
      onSubmitEditing={() => refLocation.current.focus()}
      placeholder="Image URL"
      blurOnSubmit={false}
    />
  );
  let imageUploadButton = <UploadImage setState={setImageUrl} />;
  if (imageUrl) imageTextBox = <></>;
  if (image) imageUploadButton = <></>;

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
        {/* <Button onPress={showDatepicker} title="Select Date!" />
        <Button onPress={showTimepicker} title="Select Time!" /> */}

        <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between' }}>
          <CustomButton
            onPress={showDatepicker}
            title="Select Date"
            type="picker"
          />
          <CustomButton
            onPress={showTimepicker}
            title="Select Time"
            type="picker"
          />
        </View>

        <Text style={text.dateInput}>{Moment.format(date)}</Text>

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
        {imageTextBox}
        {imageUploadButton}
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
