import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import Category from "../screens/Category";
import { appFont } from "../theme";
import Activity from "../screens/Activity";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: appFont },
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={({ route }) => ({
          title: route.params.title,
          id: route.params.id,
        })}
      />
    </Stack.Navigator>
  );
}

// Hide header style
