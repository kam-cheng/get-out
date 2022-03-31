import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import fetchOrganiser from "../../api/fetchOrganiser";
import { ui, text } from "../../theme";

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
      <Text style={[text.body, { marginBottom: 20 }]}>{user.name}</Text>
      <Image
        style={ui.avatar}
        source={{
          uri: user.avatarUrl,
        }}
        accessibilityLabel="Organiser Picture"
      />
    </View>
  );
}
