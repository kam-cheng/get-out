import { useState, useEffect } from "react";
import fetchDocuments from "../api/fetchDocuments";

const useActivitiesList = (props) => {
  const [activities, setActivities] = useState(null);
  props.setState = setActivities;
  console.log(props);

  useEffect(() => {
    async function getDocuments() {
      await fetchDocuments(props);
    }
    getDocuments();
  }, []);

  return activities;
};

export default useActivitiesList;
