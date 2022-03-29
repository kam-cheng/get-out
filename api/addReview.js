import firestore from "@react-native-firebase/firestore";

const addReview = async ({
    id,
    username,
    rating, 
    review
}) => {
    const data = {
        username,
        rating, 
        review
    }
    try {
        await firestore()
          .doc(`activities/${id}`)
          .update({ reviews: firestore.FieldValue.arrayUnion(data) });
    
        return `Review Added!`;
      } catch (err) {
        console.log(err);
      }
}

export default addReview;