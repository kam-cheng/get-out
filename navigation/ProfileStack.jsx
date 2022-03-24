import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile";
import OrganiseForm from "../screens/OrganiseForm";
import ActivityScreen from "../screens/Activity";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Create New Activity" component={OrganiseForm} />
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
}
