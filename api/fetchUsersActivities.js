import firestore from "@react-native-firebase/firestore";

// reference to collection you are after
const fetchUsersActivities = async (organiser, setOrganised) => {
  const arrayofactivities = [];

  const query = firestore()
    .collection("Activities")
    .where("Organiser", "==", organiser);

  await query.onSnapshot((querySnapshot) => {
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
    setOrganised(arrayofactivities);
  });
};

export default fetchUsersActivities;
