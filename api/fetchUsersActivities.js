import firestore from "@react-native-firebase/firestore";

// reference to collection you are after
const fetchUsersActivities = async (organiser) => {
  const activitiesArray = [];
  const activities = await firestore().collection("Activities");
  const usersActivities = await activities
    .where("Organiser", "==", organiser)
    .get();
  if (usersActivities.empty) {
    return false;
  }

  // send matching activities back
  usersActivities.forEach((item) => {
    const newItem = item.data();
    // get document id and assign it to object
    newItem.id = item.id;
    // .data() is a method for getting data
    activitiesArray.push(newItem);
  });
  return activitiesArray;
};

export default fetchUsersActivities;
