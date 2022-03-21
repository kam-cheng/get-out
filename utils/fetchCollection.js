import firestore from "@react-native-firebase/firestore";

// fetchCollection will return the collection when passed the name of the collection as an argument
const fetchCollection = async (name) => {
  const collectionArray = [];
  const collection = await firestore().collection(name).get();
  collection.forEach((item) => {
    const newItem = item.data();
    // get document id and assign it to object
    newItem.id = item.id;
    // .data() is a method for getting data
    collectionArray.push(newItem);
  });
  return collectionArray;
};

export default fetchCollection;
