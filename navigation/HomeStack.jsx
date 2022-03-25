import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import CategoryScreen from "../screens/Category";
import ActivityScreen from "../screens/Activity";
import { appFont } from "../theme";

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
        component={CategoryScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={({ route }) => ({
          title: route.params.title
        })}
      />
    </Stack.Navigator>
  );
}

// Hide header style
