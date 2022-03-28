import { geohashForLocation } from "geofire-common";
import firestore from "@react-native-firebase/firestore";

export default async function addHash(x, y, id) {
  // Compute the GeoHash for a lat/lng point
  const lat = x;
  const lng = y;
  const hash = geohashForLocation([lat, lng]);
  // Add the hash and the lat/lng to the document. We will use the hash
  // for queries and the lat/lng for distance comparisons.
  const activityRef = firestore().collection("activities").doc(id);

  activityRef.update({ geohash: hash });
}
