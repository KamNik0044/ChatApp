import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDunBUAp4Qo84ZRpVdNbj25GZUHeKDJDrU",
  authDomain: "chat-de44d.firebaseapp.com",
  databaseURL: "https://chat-de44d-default-rtdb.firebaseio.com",
  projectId: "chat-de44d",
  storageBucket: "chat-de44d.appspot.com",
  messagingSenderId: "531121272673",
  appId: "1:531121272673:web:29358a5d3c3a287e553720"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()