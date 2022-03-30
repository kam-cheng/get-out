import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "../screens/Map";
import ActivityItem from "../screens/ActivityItem";
import { appFont } from "../theme";

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
        }}
        name="Activity"
        component={ActivityItem}
      />
    </Stack.Navigator>
  );
}
