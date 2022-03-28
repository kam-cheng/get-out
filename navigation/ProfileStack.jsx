import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile";
import OrganiseForm from "../screens/OrganiseForm";
import ActivityItem from "../screens/ActivityItem";
import GooglePlacesInput from "../screens/LocationBox";
import { appFont } from "../theme";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleStyle: { fontFamily: appFont },
          headerTitleAlign: "center",
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: { fontFamily: appFont },
          headerTitleAlign: "center",
        }}
        name="Create New Activity"
        component={OrganiseForm}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: { fontFamily: appFont },
          headerTitleAlign: "center",
        }}
        name="Activity"
        component={ActivityItem}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: { fontFamily: appFont },
          headerTitleAlign: "center",
        }}
        name="Location Input"
        component={GooglePlacesInput}
      />
    </Stack.Navigator>
  );
}
