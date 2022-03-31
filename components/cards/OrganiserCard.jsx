import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import fetchOrganiser from "../../api/fetchOrganiser";
import { ui, text, colors } from "../../theme";

export default function OrganiserCard({ organiser }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchOrganiser(organiser).then((userDetails) => {
      setUser(userDetails);
    });
  }, []);

  //   if (!user) return <></>;
  return (
    <View style={ui.centerAlign}>
      <Text style={text.subtitle}>Organiser</Text>
      <Image
        style={[ui.avatar, { width: 100, height: 100, marginBottom: 10 }]}
        source={{
          uri: user.avatarUrl,
        }}
        accessibilityLabel="Organiser Picture"
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[text.body, { paddingRight: 5, textAlign: "center" }]}>
          {user.name}
        </Text>
        <MaterialIcons name="verified" color={colors.buttonPrimary} size={24} />
      </View>
      <Text
        style={[
          text.body,
          { marginTop: 15, fontStyle: "italic", marginBottom: 20 },
        ]}
      >
        "Hi guys! I'm {user.name}, lovely to meet you."
      </Text>
    </View>
  );
}
