import firestore from "@react-native-firebase/firestore";

const addActivity = async ({
  activity,
  category,
  date,
  description,
  image,
  location,
  organiser,
}) => {
  const data = {
    Activity: activity,
    Category: category,
    Date: date,
    Description: description,
    Image: image,
    Location: location,
    Organiser: organiser,
  };
  const postActivity = await firestore().collection("Activities").add(data);

  return `added new Activity! Id: ${postActivity.id}`;
};

export default addActivity;
