import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "../screens/Map";
import ActivityItem from "../screens/ActivityItem";
import { appFont } from "../theme";
import ProfileScreen from "../screens/Profile";

export default function MapStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={Map}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: { fontFamily: appFont },
          headerTitleAlign: "center",
          title: "",
        }}
        name="Activity"
        component={ActivityItem}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: { fontFamily: appFont },
          headerTitleAlign: "center",
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}
