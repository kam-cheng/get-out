import firestore from "@react-native-firebase/firestore";
import UserContext from "../context/User";
import React, { useContext } from "react-native";

export default bookActivity = async ({activityId}) => {
 const {user: {name}} = useContext(UserContext)

 const book = firestore().doc(`activities/${activityId}`).update({attendees: firestore.FieldValue.arrayUnion({name})})

 return `Event booked! Id: ${activityId}`

}


