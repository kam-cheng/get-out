import firestore from "@react-native-firebase/firestore";

export default cancelBooking = async (username, activityId) => {
  try {
    const book = await firestore()
      .doc(`Activities/${activityId}`)
      .update({ Attendees: firestore.FieldValue.arrayRemove(username) });

    return `Booking Cancelled!`;
  } catch (err) {
    console.log(err);
  }
};
