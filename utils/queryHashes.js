/* eslint-disable no-restricted-syntax */
import firestore from "@react-native-firebase/firestore";
import { geohashQueryBounds, distanceBetween } from "geofire-common";
import fetchCollection from "../api/fetchCollection";
import { useState } from "react";

export default function queryHashes(userLat, userLng, radius) {
  // Find cities within 50km of London
  const center = [userLat, userLng];
  const radiusInM = radius * 1000;

  // const [loading, setIsLoading] = useState(false);
  // const [data, setData] = useState();

  // Each item in 'bounds' represents a startAt/endAt pair. We have to issue
  // a separate query for each pair. There can be up to 9 pairs of bounds
  // depending on overlap, but in most cases there are 4.
  const bounds = geohashQueryBounds(center, radiusInM);

  const promises = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const b of bounds) {
    const q = firestore()
      .collection("activities")
      .orderBy("geohash")
      .startAt(b[0])
      .endAt(b[1]);

    promises.push(q.get());
  }
  // Collect all the query results together into a single list
  return Promise.all(promises).then((snapshots) => {
    const matchingDocs = [];

    for (const snap of snapshots) {
      for (const doc of snap.docs) {
        const lat = doc.get("lat");
        const lng = doc.get("lng");

        // const id = doc.id;
        // We have to filter out a few false positives due to GeoHash
        // accuracy, but most will match
        const distanceInKm = distanceBetween([lat, lng], center);
        const distanceInM = distanceInKm * 1000;
        if (distanceInM <= radiusInM) {
          const newDoc = doc.data();
          newDoc.id = doc.id;
          newDoc.date = newDoc.date.toDate().toString();
          matchingDocs.push(newDoc);
        }
      }
    }
    return matchingDocs;
  });
}
