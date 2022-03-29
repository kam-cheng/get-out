import firestore from "@react-native-firebase/firestore";

const addReview = async ({ id, user, rating, review }) => {
  const data = {
    user,
    rating,
    review,
  };
  try {
    await firestore()
      .doc(`activities/${id}`)
      .update({ reviews: firestore.FieldValue.arrayUnion(data) });

    return `Review Added!`;
  } catch (err) {
    console.log(err);
  }
};

export default addReview;
