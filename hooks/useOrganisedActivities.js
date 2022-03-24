import { useState, useEffect } from "react";
import fetchDocuments from "../api/fetchDocuments";

const useOrganisedActivities = (organiser) => {
  const [activities, setActivities] = useState(null);

  const queryparams = {
    query: "==",
    collection: "Activities",
    key: "Organiser",
    value: organiser,
    setState: setActivities,
  };

  useEffect(() => {
    fetchDocuments(queryparams);
  }, [organiser]);

  return activities;
};

export default useOrganisedActivities;
