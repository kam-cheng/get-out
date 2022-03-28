import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import CategoryScreen from "../screens/Category";
import ActivityScreen from "../screens/Activity";
import { appFont } from "../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
        name="Activity"
        component={ActivityScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: { fontFamily: appFont },
        })}
      />
    </Stack.Navigator>
  );
}

// Hide header style
