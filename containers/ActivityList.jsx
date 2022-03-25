import React, { useState, useEffect } from "react";

import fetchDocuments from "../api/fetchDocuments";


import ActivityCard from "../components/cards/ActivityCard";

export default function ActivityList({ navigation, props }) {
  const [activityList, setActivityList] = useState([]);
  console.log(props)

useEffect(()=> {
  fetchDocuments("activities")
})



  const handlePress = (title) => {
    navigation.navigate("Activity", { title });
  };

  return outdoors.map((item) => (
    <ActivityCard
      key={item.id}
     
      title={item.title}
      img_url={item.img_url}
      handlePress={handlePress}
    />
  ));
}
