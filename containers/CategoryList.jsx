import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CategoryCard from "../components/cards/CategoryCard";

export default function CategoryList() {
  // dummy data, replace with call to api
  const categories = [
    { id: 1, name: "Outdoors" },
    { id: 2, name: "Clubbing" },
    { id: 3, name: "Reading" },
  ];

  return (
    <View>
      <FlatList
        style={StyleSheet.container}
        data={categories}
        renderItem={({ item }) => <CategoryCard name={item.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
