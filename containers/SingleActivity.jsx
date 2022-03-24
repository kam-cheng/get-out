import React from "react";
import SingleActivityCard from "../components/cards/SingleActivityCard";

export default function SingleActivity({ navigation }) {
  const activity = [
    {
      id: 1,
      date: "Thu, 24 Mar",
      title: "50k Marathon",
      time: "13:36",
      ratings: "4.9",
      body: "Lorem ipsum dolor sit amet. Quo laboriosam obcaecati et voluptas perspiciatis est perferendis libero.",
      imgURL:
        "https://images.unsplash.com/photo-1420582282039-a6d11404cb66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3V0ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <SingleActivityCard
      id={item.id}
      date={item.date}
      title={item.title}
      time={item.time}
      ratings={item.ratings}
      body={item.body}
      imgURL={item.imgURL}
    />
  );
}
