import firestore from "@react-native-firebase/firestore";
import uploadImage from "./uploadImage";

const addActivity = async ({
  activity,
  category,
  date,
  description,
  image,
  imageUrl,
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
    imgUrl: image,
    location,
    organiser,
    locationId: new firestore.GeoPoint(latitude, longitude),
  };
  // add uploaded photo if no url supplied
  if (imageUrl !== null) data.imgUrl = await uploadImage(imageUrl);

  try {
    await firestore().collection("activities").add(data);
    return `added new Activity!`;
  } catch (err) {
    console.log(err);
  }
};

export default addActivity;
