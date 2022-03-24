import React from "react";
import CategoryCard from "../components/cards/CategoryCard";

export default function CategoryList({ navigation }) {
  // dummy data, replace with call to api
  const categories = [
    {
      id: 1,
      name: "Outdoors",
      img_url:
        "https://images.unsplash.com/photo-1508867743401-21ad68d105b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: 2,
      name: "Clubbing",
      img_url:
        "https://images.unsplash.com/photo-1541500792866-07f25e0c8578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2x1YmJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    },

    {
      id: 3,
      name: "Reading",
      img_url:
        "https://images.unsplash.com/photo-1592355591823-2657dbc25ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHJlYWRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    },
  ];

  const handlePress = (name) => {
    // Replace alert with navigation tools
    // alert(`Category: ${name}, ID: ${id}`);
    navigation.navigate("Category", { name });
  };

  return categories.map((item) => (
    <CategoryCard
      key={item.id}
      id={item.id}
      name={item.name}
      imgUrl={item.img_url}
      handlePress={handlePress}
    />
  ));
}
