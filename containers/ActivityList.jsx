import React from "react";

import ActivityCard from "../components/cards/ActivityCard";

export default function ActivityList({ navigation }) {
  const outdoors = [
    {
      id: 1,
      title: "50k Marathon",
      body: "An ultramarathon, also called ultra distance or ultra running, is any footrace longer than the traditional marathon length of 42.195 kilometres",
      rating: 4.9,
      img_url:
        "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
    },
    {
      id: 2,
      title: "Lake District Run",
      body: "The Lake District is a region and national park in Cumbria in northwest England. A popular vacation destination, it's known for its glacial ribbon lakes, rugged fell mountains and historic literary associations.",
      rating: 4.5,
      img_url:
        "https://images.unsplash.com/photo-1615393911241-32add28288a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2842&q=80",
    },
    {
      id: 3,
      title: "City Run",
      body: "The Great Manchester Run is an annual run through Greater Manchester. It has consisted of a 10k run since it was established in 2003.",
      rating: 5,
      img_url:
        "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2786&q=80",
    },
  ];

  const handlePress = (title, id) => {
    navigation.navigate("Activities", { title });
  };

  return outdoors.map((item) => (
    <ActivityCard
      key={item.id}
      id={item.id}
      title={item.title}
      img_url={item.img_url}
      handlePress={handlePress}
    />
  ));
}
