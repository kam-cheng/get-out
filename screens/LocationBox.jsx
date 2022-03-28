import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { LogBox } from "react-native";
import MAPS_API_KEY from "../key/Maps";

// ignore warning as unable to resolve at present
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

function GooglePlacesInput({ navigation }) {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails
      onPress={(data, details = null) => {
        navigation.navigate({
          name: "Create New Activity",
          params: { data, details },
          merge: true,
        });
      }}
      query={{
        key: MAPS_API_KEY,
        language: "en",
        components: "country:uk",
      }}
    />
  );
}

export default GooglePlacesInput;
