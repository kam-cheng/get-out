import firestore from "@react-native-firebase/firestore";

export default cancelActivity = async (activityId) => {
  try {
    const book = await firestore().doc(`activities/${activityId}`).delete();

    return `Activity Cancelled!`;
  } catch (err) {
    console.log(err);
  }
};
