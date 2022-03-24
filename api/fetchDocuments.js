import firestore from "@react-native-firebase/firestore";

const fetchDocuments = async ({ collection, key, query, setState, value }) => {
  const arrayofactivities = [];
  await firestore()
    .collection(collection)
    .where(key, query, value)
    .onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const newItem = change.doc.data();
          newItem.id = change.doc.id;
          arrayofactivities.push(newItem);
        }
        if (change.type === "removed") {
          const index = arrayofactivities.findIndex(
            (item) => item.id === change.doc.id
          );
          arrayofactivities.splice(index, 1);
        }
      });
      // update usestate because returning does not seem to work!!
      setState(() => arrayofactivities);
    });
};

export default fetchDocuments;
