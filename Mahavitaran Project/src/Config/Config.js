import * as firebase from "firebase";

import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUGjN2IvC9cxNVE4XNqZ6hQxO5dX7uF4I",
  authDomain: "online-electricity-bill-8097f.firebaseapp.com",
  databaseURL:
    "https://online-electricity-bill-8097f-default-rtdb.firebaseio.com",
  projectId: "online-electricity-bill-8097f",
  storageBucket: "online-electricity-bill-8097f.appspot.com",
  messagingSenderId: "486322281570",
  appId: "1:486322281570:web:d3aa228320ae9dc32d453b",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
