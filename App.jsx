import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./screens/Home"; // unused?
import HomeStack from "./navigation/HomeStack";
import ProfileStack from "./navigation/ProfileStack";
import UserContext from "./context/User";
import MapStack from "./navigation/MapStack";

// importing global theme
import { colors } from "./theme";

const Tab = createBottomTabNavigator();

function App() {
  const [user, setUser] = useState({
    name: "TestUser",
    avatar:
      "https://twiki.cern.ch/twiki/pub/LHCb/Bender/bender-for-website.jpg",
    rating: 5,
    verified: true,
    locationId: {
      _latitude: 53.48346273455076,
      _longitude: -2.243033295129627,
    },
    location: "Manchester",
    geohash: "gcpvj1k18",
  });

  // THIS IS WHAT THE GEOLOCATION LOOKS LIKE IN JS
  // "locationId": {"_latitude": 51.50795973303849, "_longitude": -0.3234002831740929}

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
