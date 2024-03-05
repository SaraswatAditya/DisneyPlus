import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn3KWu7u1XDvJTeZbU_kiR3f-nPRJFNvw",
  authDomain: "disneyplus-clone-b07d7.firebaseapp.com",
  projectId: "disneyplus-clone-b07d7",
  storageBucket: "disneyplus-clone-b07d7.appspot.com",
  messagingSenderId: "281721516262",
  appId: "1:281721516262:web:72f7d5b021a998ab498b27",
  measurementId: "G-5L0QXHWQ3Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

// const auth = firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// const { auth, provider, storage };

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default db;