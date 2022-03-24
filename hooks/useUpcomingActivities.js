import { useState, useEffect } from "react";
import fetchDocuments from "../api/fetchDocuments";

const useUpcomingActivities = (organiser) => {
  const [activities, setActivities] = useState(null);

  const queryparamsUser = {
    query: "array-contains",
    collection: "Activities",
    key: "Attendees",
    value: organiser,
    setState: setActivities,
  };

  useEffect(() => {
    async function getDocuments() {
      await fetchDocuments(queryparamsUser);
    }
    getDocuments();
  }, [organiser]);

  return activities;
};

export default useUpcomingActivities;
