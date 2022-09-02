import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6QPLDDntxP8oSPXOQn_0orlhPyDihuI4",
  authDomain: "the-dump.firebaseapp.com",
  projectId: "the-dump",
  storageBucket: "the-dump.appspot.com",
  messagingSenderId: "773012649562",
  appId: "1:773012649562:web:5a9815a3a00e3044960a63"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);