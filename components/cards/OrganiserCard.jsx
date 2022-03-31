import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
      <Image
        style={[ui.avatar, { width: 100, height: 100, marginBottom: 10 }]}
        source={{
          uri: user.avatarUrl,
        }}
        accessibilityLabel="Organiser Picture"
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={[text.body, { paddingRight: 10 }]}>{user.name}</Text>
        <MaterialIcons name="verified" color="#212121" size={25} />
      </View>
    </View>
  );
}
