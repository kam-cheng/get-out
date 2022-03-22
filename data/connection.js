const admin = require("firebase-admin");
const { getFirestore} = require('firebase-admin/firestore');

const serviceAccount = require("../key/firekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // needs to be dotenv environment variable
  databaseURL: 'https://get-out-21a4f.firebaseio.com'
  // databaseURL: process.env.FIREBASE_URL
});

module.exports = getFirestore();