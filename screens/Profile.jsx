/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import UserContext from "../context/User";
import { ui, text } from "../theme";
import ActivitiesList from "../containers/ActivitiesList";
import CustomButton from "../components/ui/CustomButton";

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <ScrollView>
      <View style={ui.profileHeaderContainer}>
        <View style={ui.centerAlign}>
          <Text style={text.body}>Welcome Back</Text>
          <Text style={text.sectionTitle}>Test User</Text>
          <Image
            style={ui.avatar}
            source={{
              uri: user.avatar,
            }}
            accessibilityLabel="Profile Picture"
          />

          <CustomButton
            title="Create New Activity"
            type="primary"
            onPress={() => navigation.navigate("Create New Activity")}
          />
        </View>
      </View>

      <View style={ui.activityProfileContainer}>
        <ActivitiesList
          heading="Organised Activities"
          props={{
            query: "==",
            collection: "Activities",
            key: "Organiser",
            value: user.name,
          }}
        />
        <ActivitiesList
          heading="Upcoming Activities"
          props={{
            query: "array-contains",
            collection: "Activities",
            key: "Attendees",
            value: user.name,
          }}
        />
        <ActivitiesList
          heading="Past Activities"
          props={{
            query: "array-contains",
            collection: "Activities",
            key: "Attendees",
            value: user.name,
            time: "<",
            order: "desc",
          }}
        />
      </View>
    </ScrollView>
  );
}
