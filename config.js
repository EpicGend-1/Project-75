import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAqjrUHQ1q-RlFTr-GnVP2ye-C42vbgm6Q",
  authDomain: "project-71-30601.firebaseapp.com",
  projectId: "project-71-30601",
  storageBucket: "project-71-30601.appspot.com",
  messagingSenderId: "222377908572",
  appId: "1:222377908572:web:5bda3d5e9dd1b807a98999"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
