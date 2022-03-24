import firestore from "@react-native-firebase/firestore";

const fetchDocuments = async ({
  collection,
  key,
  query,
  setState,
  value,
  time = ">=",
  order = "asc",
}) => {
  const currentTime = firestore.Timestamp.now();
  const arrayofactivities = [];
  const ref = await firestore()
    .collection(collection)
    .where(key, query, value)
    .where("Date", time, currentTime)
    .orderBy("Date", order);
  ref.onSnapshot(
    (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const newItem = change.doc.data();
          newItem.id = change.doc.id;
          // convert timestamp to date
          newItem.Date = newItem.Date.toDate().toString();
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
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );
};

export default fetchDocuments;
