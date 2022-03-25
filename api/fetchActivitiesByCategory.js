import firestore from "@react-native-firebase/firestore";

const fetchActivitiesByCategory = async (category) => {
  const activitiesByCategoryArray = [];
  const activitiesList = await firestore().collection("Activities");
  const categoryActivities = await activitiesList
    .where("Category", "==", category)
    .get();

  if (categoryActivities.empty) return null;

  categoryActivities.forEach((item) => {
    const newActivity = item.data();

    newActivity.id = item.id;
    activitiesByCategoryArray.push(newActivity);
  });

  return activitiesByCategoryArray;
};

export default fetchActivitiesByCategory;
