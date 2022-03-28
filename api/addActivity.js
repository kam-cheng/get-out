import firestore from "@react-native-firebase/firestore";

const addActivity = async ({
  activity,
  category,
  date,
  description,
  image,
  location,
  longitude,
  latitude,
  organiser,
}) => {
  const data = {
    title: activity,
    category,
    date,
    body: description,
    imgurl: image,
    location,
    organiser,
    locationId: new firestore.GeoPoint(latitude, longitude),
  };
  await firestore().collection("activities").add(data);

  return `added new Activity!`;
};

export default addActivity;
