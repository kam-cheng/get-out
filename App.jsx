import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./screens/Home"; // unused?
import HomeStack from "./navigation/HomeStack";
import ProfileStack from "./navigation/ProfileStack";
import UserContext from "./context/User";

// importing global theme
import { colors } from "./theme";

const Tab = createBottomTabNavigator();

function App() {
  const [user, setUser] = useState({
    name: "TestUser",
    avatar:
      "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    rating: 5,
    verified: true,
  });
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
