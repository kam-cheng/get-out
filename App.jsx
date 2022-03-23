import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./screens/Home";

import HomeStack from "./navigation/HomeStack";

import ProfileStack from "./navigation/ProfileStack";
import UserContext from "./context/User";

// importing global theme
import { colors, text, ui } from "./theme";

const Tab = createBottomTabNavigator();

function App() {
  const [user, setUser] = useState({
    name: "TestUser",
    avatar:
      "https://twiki.cern.ch/twiki/pub/LHCb/Bender/bender-for-website.jpg",
    rating: 5,
    verified: true,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.active,
            tabBarInactiveTintColor: colors.inactive,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={34} />
              ),
            }}
          />
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{
              tabBarIcon: ({ color, size }) => (
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
