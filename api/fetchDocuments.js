import firestore from "@react-native-firebase/firestore";
import { useEffect } from "react";

const fetchDocuments = ({
  collection,
  key,
  query,
  setState,
  value,
  time = ">=",
  order = "asc",
}) => {
  const currentTime = firestore.Timestamp.now();
  const ref = firestore()
    .collection(collection)
    .where(key, query, value)
    .where("Date", time, currentTime)
    .orderBy("Date", order);

  useEffect(
    () =>
      ref.onSnapshot(
        (querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            data.Date = data.Date.toDate().toString();
            list.push(data);
          });
          setState(list);
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      ),
    []
  );
};

export default fetchDocuments;
