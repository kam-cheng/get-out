/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./screens/Home"; // unused?
import HomeStack from "./navigation/HomeStack";
import ProfileStack from "./navigation/ProfileStack";
import UserContext from "./context/User";
import MapStack from "./navigation/MapStack";
import fetchCollection from "./api/fetchCollection";

// importing global theme
import { colors } from "./theme";

const Tab = createBottomTabNavigator();

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetchCollection("users").then((users) => {
      setUser(users[1]);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: "salmon" },
            tabBarActiveTintColor: colors.active,
            tabBarInactiveTintColor: colors.inactive,
            tabBarShowLabel: false,
            tabBarStyle: { justifyContent: "space-between" },
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={34} />
              ),
            }}
          />
          <Tab.Screen
            name="MapStack"
            component={MapStack}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="map" color={color} size={34} />
              ),
            }}
          />
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={34} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
