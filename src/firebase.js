// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth = firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

const { auth, provider, storage };
export default db;