import firestore from "@react-native-firebase/firestore";
import { useEffect } from "react";

const fetchDocuments = (
  { collection, key, query, setState, value, time = ">=", order = "asc" },
  setLoading
) => {
  const currentTime = firestore.Timestamp.now();
  const ref = firestore()
    .collection(collection)
    .where(key, query, value)
    .where("date", time, currentTime)
    .orderBy("date", order);

  useEffect(() => {
    setLoading(true);
    ref.onSnapshot(
      (querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          data.date = data.date.toDate().toString();
          list.push(data);
        });
        setState(list);
        setLoading(false);
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
        setLoading(false);
      }
    );

    return function cleanup() {
      setLoading(false);
    };
  }, []);
};

export default fetchDocuments;
