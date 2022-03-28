import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import CategoryScreen from "../screens/Category";
import ActivityItem from "../screens/ActivityItem";
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
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTitleStyle: { fontFamily: appFont },
          headerTitleAlign: "center",
        })}
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

// Hide header style
