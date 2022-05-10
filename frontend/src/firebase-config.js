import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQvZ9sdBpeMf8nmUgYlDs9oRXnrlx87i8",
  authDomain: "eggnationrn.firebaseapp.com",
  databaseURL: "https://eggnationrn-default-rtdb.firebaseio.com",
  projectId: "eggnationrn",
  storageBucket: "eggnationrn.appspot.com",
  messagingSenderId: "774138073703",
  appId: "1:774138073703:web:bbec7cbe68ee78073afac2",
  measurementId: "G-9JRCTZYMDY",
};

const app = initializeApp(firebaseConfig);

export const FBAuth = getAuth(app);
export const FBFirestore = getFirestore(app);
