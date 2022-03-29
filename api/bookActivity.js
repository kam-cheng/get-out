import firestore from "@react-native-firebase/firestore";

export default bookActivity = async (username, activityId) => {
  try {
    const book = await firestore()
      .doc(`activities/${activityId}`)
      .update({ attendees: firestore.FieldValue.arrayUnion(username) });

    return `Event booked! Id: ${activityId}`;
  } catch (err) {
    console.log(err);
  }
};
