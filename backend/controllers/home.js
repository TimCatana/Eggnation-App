const axios = require("axios");
const storeUtils = require("../util/store");

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const firestoreDB = getFirestore(app);

exports.addPrizeToDatabase = async (req, res) => {
  const document =
    req.param.collection === "available-prizes"
      ? doc(firestoreDB, `available-prizes/${req.param.id}`)
      : doc(firestoreDB, `contest-prizes/${req.param.id}`);

  await setDoc(document, {
    prizeId: req.param.id,
    prizeTitle: req.query.prizeTitle,
    prizeDesc: req.query.prizeDesc,
    prizeTier: req.query.prizeTier,
    prizeType: req.query.prizeType,
    prizeClaimType: req.query.prizeClaimType,
  });
};
