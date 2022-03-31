import firestore from "@react-native-firebase/firestore";

const cancelBooking = async (username, activityId) => {
  try {
    const book = await firestore()
      .doc(`activities/${activityId}`)
      .update({ attendees: firestore.FieldValue.arrayRemove(username) });

    return `Booking Cancelled!`;
  } catch (err) {
    console.log(err);
  }
};

export default cancelBooking;
