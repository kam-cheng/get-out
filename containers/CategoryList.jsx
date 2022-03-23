import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CategoryCard from "../components/cards/CategoryCard";

export default function CategoryList() {
  // dummy data, replace with call to api
  const categories = [
    {
      id: 1,
      name: "Outdoors",
      img_url:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Clubbing",
      img_url:
        "https://images.unsplash.com/photo-1506485927884-1900e37ac5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    },

    {
      id: 3,
      name: "Reading",
      img_url:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
  ];

  const handlePress = (name) => {
    // Navigate to corresponding screen
    alert(`You tapped! ${name}`);
  };

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            name={item.name}
            imgUrl={item.img_url}
            handlePress={handlePress}
          />
        )}
      />
    </View>
  );
}
