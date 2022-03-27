import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile";
import OrganiseForm from "../screens/OrganiseForm";
import ActivityItem from "../screens/ActivityItem";
import GooglePlacesInput from "../screens/LocationBox";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Create New Activity" component={OrganiseForm} />
      <Stack.Screen name="Activity" component={ActivityItem} />
      <Stack.Screen name="Location Input" component={GooglePlacesInput} />
    </Stack.Navigator>
  );
}
