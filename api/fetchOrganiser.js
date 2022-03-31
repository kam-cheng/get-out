import firestore from "@react-native-firebase/firestore";

const fetchOrganiser = async (organiser) => {
  const collectionArray = [];
  const ref = await firestore()
    .collection("users")
    .where("name", "==", organiser)
    .get();
  ref.forEach((item) => {
    const newItem = item.data();
    // get document id and assign it to object
    newItem.id = item.id;
    // .data() is a method for getting data
    collectionArray.push(newItem);
  });
  return collectionArray[0];
};

export default fetchOrganiser;
