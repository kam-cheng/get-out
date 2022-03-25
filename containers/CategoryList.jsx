import React, { useState, useEffect } from "react";
import CategoryCard from "../components/cards/CategoryCard";
import fetchCollection from "../api/fetchCollection";

export default function CategoryList({ navigation }) {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchCollection("categories").then((categories) => {
      setCategoriesList(categories);
    });
  }, []);
  const handlePress = (name) => {
    navigation.navigate("Category", { name });
  };

  return categoriesList.map((item) => (
    <CategoryCard
      key={item.id}
      name={item.name}
      imgUrl={item.imgUrl}
      handlePress={handlePress}
    />
  ));
}
